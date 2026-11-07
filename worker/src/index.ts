interface Env {
  PORTFOLIO: R2Bucket
  DB: D1Database
  R2_PUBLIC_BASE_URL: string
  CORS_ORIGIN: string
  ADMIN_UPLOAD_TOKEN: string
}

type FileRecord = {
  id: number
  key: string
  name: string
  content_type: string
  size: number
  created_at: string
}

function headers(env: Env, contentType = "application/json") {
  return {
    "Content-Type": contentType,
    "Access-Control-Allow-Origin": env.CORS_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  }
}

function json(env: Env, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: headers(env) })
}

function authorized(request: Request, env: Env) {
  const expected = env.ADMIN_UPLOAD_TOKEN?.trim()
  const provided = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "").trim()
  return Boolean(expected && provided && provided === expected)
}

function publicUrl(env: Env, key: string) {
  return `${env.R2_PUBLIC_BASE_URL.replace(/\/$/, "")}/${encodeURIComponent(key)}`
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: headers(env) })
    }

    const url = new URL(request.url)
    const path = url.pathname.replace(/\/+$/, "") || "/"

    if (request.method === "GET" && path === "/") {
      return json(env, { name: "portfolio-api", status: "ok" })
    }

    if (request.method === "GET" && path === "/files") {
      const { results } = await env.DB.prepare(
        "SELECT id, key, name, content_type, size, created_at FROM files ORDER BY created_at DESC"
      ).all<FileRecord>()

      return json(
        env,
        results.map((file) => ({ ...file, url: publicUrl(env, file.key) }))
      )
    }

    if (request.method === "POST" && path === "/files") {
      if (!authorized(request, env)) return json(env, { error: "Unauthorized" }, 401)

      const form = await request.formData()
      const value = form.get("file")
      if (!(value instanceof File)) return json(env, { error: "A file is required" }, 400)
      if (value.size === 0 || value.size > 10 * 1024 * 1024) {
        return json(env, { error: "File must be between 1 byte and 10 MB" }, 400)
      }

      const safeName = value.name.replace(/[^a-zA-Z0-9._-]/g, "-")
      const key = `${Date.now()}-${crypto.randomUUID()}-${safeName}`
      await env.PORTFOLIO.put(key, value.stream(), {
        httpMetadata: { contentType: value.type || "application/octet-stream" },
      })
      await env.DB.prepare(
        "INSERT INTO files (key, name, content_type, size) VALUES (?, ?, ?, ?)"
      )
        .bind(key, value.name, value.type || "application/octet-stream", value.size)
        .run()

      return json(
        env,
        { key, name: value.name, size: value.size, contentType: value.type, url: publicUrl(env, key) },
        201
      )
    }

    const match = path.match(/^\/files\/(.+)$/)
    if (request.method === "DELETE" && match) {
      if (!authorized(request, env)) return json(env, { error: "Unauthorized" }, 401)

      const key = decodeURIComponent(match[1])
      await env.PORTFOLIO.delete(key)
      await env.DB.prepare("DELETE FROM files WHERE key = ?").bind(key).run()
      return json(env, { ok: true })
    }

    return json(env, { error: "Not found" }, 404)
  },
}

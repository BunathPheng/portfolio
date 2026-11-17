import { describe, expect, it, vi } from "vitest"
import worker from "../worker/src/index"

const env = {
  CORS_ORIGIN: "https://bunath.me",
  R2_PUBLIC_BASE_URL: "https://assets.bunath.me",
  ADMIN_UPLOAD_TOKEN: "secret",
  PORTFOLIO: {
    delete: vi.fn(),
    put: vi.fn(),
  },
  DB: {
    prepare: vi.fn(),
  },
}

describe("portfolio worker", () => {
  it("returns a health response", async () => {
    const response = await worker.fetch(new Request("https://api.example/"), env as never)

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ name: "portfolio-api", status: "ok" })
  })

  it("rejects unauthorized uploads", async () => {
    const response = await worker.fetch(
      new Request("https://api.example/files", { method: "POST" }),
      env as never
    )

    expect(response.status).toBe(401)
  })

  it("handles preflight requests", async () => {
    const response = await worker.fetch(
      new Request("https://api.example/files", { method: "OPTIONS" }),
      env as never
    )

    expect(response.status).toBe(204)
    expect(response.headers.get("Access-Control-Allow-Origin")).toBe("https://bunath.me")
  })
})

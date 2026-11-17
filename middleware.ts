import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID())
  const apiOrigin = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "")
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-nonce", nonce)

  const connectSources = ["'self'", "https://challenges.cloudflare.com"]
  if (apiOrigin) connectSources.push(apiOrigin)

  const contentSecurityPolicy = [
    "default-src 'none'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    `script-src 'self' 'nonce-${nonce}' https://challenges.cloudflare.com`,
    `style-src 'self' 'nonce-${nonce}'`,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    `connect-src ${connectSources.join(" ")}`,
    "frame-src https://challenges.cloudflare.com",
    "worker-src 'self' blob:",
  ].join("; ")

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })
  response.headers.set("Content-Security-Policy", contentSecurityPolicy)
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  response.headers.set("X-Content-Type-Options", "nosniff")
  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}

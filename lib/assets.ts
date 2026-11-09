const r2BaseUrl = (
  process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL || "https://assets.bunath.me"
).replace(/\/$/, "")
const r2DevelopmentBaseUrl = "https://pub-f771ba68d32040c5a83d95618b951922.r2.dev"
export const localImageFallback = "/placeholder.svg"

export function r2Asset(filename: string) {
  return `${r2BaseUrl}/portfolio/image/${encodeURIComponent(filename)}`
}

export function r2DevelopmentAsset(filename: string) {
  return `${r2DevelopmentBaseUrl}/portfolio/image/${encodeURIComponent(filename)}`
}

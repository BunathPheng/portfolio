const r2BaseUrl = (
  process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL || "https://assets.bunath.me"
).replace(/\/$/, "")

export function r2Asset(filename: string) {
  return `${r2BaseUrl}/portfolio/image/${encodeURIComponent(filename)}`
}

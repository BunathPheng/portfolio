const r2BaseUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_BASE_URL?.replace(/\/$/, "")

export function r2Asset(filename: string) {
  if (!r2BaseUrl) return null
  return `${r2BaseUrl}/portfolio/image/${encodeURIComponent(filename)}`
}

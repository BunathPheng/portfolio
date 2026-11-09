import type { SyntheticEvent } from "react"

export function cycleImageFallback(
  event: SyntheticEvent<HTMLImageElement>,
  sources: string[]
) {
  const image = event.currentTarget
  const isSmallScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches

  if (isSmallScreen) {
    image.onerror = null
    image.src = "/placeholder.svg"
    return
  }

  const nextIndex = Number(image.dataset.fallbackIndex || 0)

  if (nextIndex >= sources.length) {
    image.onerror = null
    return
  }

  image.dataset.fallbackIndex = String(nextIndex + 1)
  image.src = sources[nextIndex]
}

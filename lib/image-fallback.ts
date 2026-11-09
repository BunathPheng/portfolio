import type { SyntheticEvent } from "react"

export function cycleImageFallback(
  event: SyntheticEvent<HTMLImageElement>,
  sources: string[]
) {
  const image = event.currentTarget
  const nextIndex = Number(image.dataset.fallbackIndex || 0)

  if (nextIndex >= sources.length) {
    image.onerror = null
    return
  }

  image.dataset.fallbackIndex = String(nextIndex + 1)
  image.src = sources[nextIndex]
}

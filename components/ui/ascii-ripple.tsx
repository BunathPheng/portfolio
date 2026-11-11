"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Ripple = {
  x: number
  y: number
  born: number
}

type AsciiRippleProps = {
  text: string
  className?: string
  ariaLabel?: string
}

export function AsciiRipple({
  text,
  className,
  ariaLabel = text,
}: AsciiRippleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | null>(null)
  const ripplesRef = useRef<Ripple[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const lines = text.split("\n")
    let width = 0
    let height = 0
    let lastFrame = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.max(1, Math.floor(width * ratio))
      canvas.height = Math.max(1, Math.floor(height * ratio))
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = (time: number) => {
      if (time - lastFrame < 32) {
        frameRef.current = requestAnimationFrame(draw)
        return
      }
      lastFrame = time
      context.clearRect(0, 0, width, height)

      const fontSize = Math.max(10, Math.min(14, width / 42))
      const lineHeight = fontSize * 1.5
      const charWidth = fontSize * 0.62
      context.font = `600 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`
      context.textAlign = "center"
      context.textBaseline = "middle"

      const activeRipples = ripplesRef.current.filter((ripple) => time - ripple.born < 1100)
      ripplesRef.current = activeRipples

      lines.forEach((line, lineIndex) => {
        const startX = width / 2 - ((line.length - 1) * charWidth) / 2
        const y = height / 2 + (lineIndex - (lines.length - 1) / 2) * lineHeight

        Array.from(line).forEach((character, characterIndex) => {
          const baseX = startX + characterIndex * charWidth
          let offsetX = 0
          let offsetY = 0
          let brightness = 0.55

          activeRipples.forEach((ripple) => {
            const age = time - ripple.born
            const distance = Math.hypot(baseX - ripple.x, y - ripple.y)
            const wave = Math.sin(distance * 0.09 - age * 0.018) * Math.max(0, 1 - age / 1100)
            const influence = Math.max(0, 1 - distance / 180)
            offsetX += wave * influence * 4
            offsetY += wave * influence * 3
            brightness += influence * 0.25
          })

          const hue = 165 + Math.min(45, brightness * 30)
          context.fillStyle = `hsla(${hue}, 72%, 56%, ${Math.min(0.95, brightness)})`
          context.fillText(character, baseX + offsetX, y + offsetY)
        })
      })

      if (!reduceMotion || activeRipples.length) {
        frameRef.current = requestAnimationFrame(draw)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top }
      if (!reduceMotion) {
        ripplesRef.current.push({ ...pointer, born: performance.now() })
        ripplesRef.current = ripplesRef.current.slice(-5)
        if (frameRef.current === null) frameRef.current = requestAnimationFrame(draw)
      }
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener("pointermove", handlePointerMove)
    resize()
    frameRef.current = requestAnimationFrame(draw)

    return () => {
      observer.disconnect()
      canvas.removeEventListener("pointermove", handlePointerMove)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [text])

  return (
    <div className={cn("relative h-8 w-full max-w-[25rem] sm:h-9", className)}>
      <canvas
        ref={canvasRef}
        aria-label={ariaLabel}
        role="img"
        className="h-full w-full touch-none"
      />
      <span className="sr-only">{ariaLabel}</span>
    </div>
  )
}

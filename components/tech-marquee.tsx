"use client"

import Image from "next/image"
import { useState, type DragEvent } from "react"
import { cn } from "@/lib/utils"
import type { TechItem } from "@/lib/tech-stack"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

type TechMarqueeProps = {
  items: TechItem[]
  rowId: "frontend" | "devops"
  onDragStart: (event: DragEvent<HTMLDivElement>, rowId: TechMarqueeProps["rowId"], index: number) => void
  onDrop: (event: DragEvent<HTMLDivElement>, rowId: TechMarqueeProps["rowId"], index: number) => void
  onDragEnd: () => void
  draggedItem: { rowId: TechMarqueeProps["rowId"]; index: number } | null
  direction?: "left" | "right"
  speed?: "slow" | "normal"
  className?: string
}

function MarqueeRow({
  items,
  rowId,
  onDragStart,
  onDrop,
  onDragEnd,
  draggedItem,
  direction = "left",
  speed = "normal",
  className,
}: TechMarqueeProps) {
  const duplicated = [...items, ...items]

  return (
    <div
      className={cn(
        "group/marquee relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-2 py-1.5 sm:gap-3 sm:py-2",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          speed === "slow" ? "![animation-duration:48s]" : "![animation-duration:34s]",
          "motion-reduce:![animation-play-state:paused]",
          "group-hover/marquee:[animation-play-state:paused]"
        )}
      >
        {duplicated.map((item, index) => {
          const itemIndex = index % items.length
          const isDragged = draggedItem?.rowId === rowId && draggedItem.index === itemIndex

          return (
            <div
              key={`${item.name}-${index}`}
              draggable
              onDragStart={(event) => onDragStart(event, rowId, itemIndex)}
              onDragEnd={onDragEnd}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault()
                event.stopPropagation()
                onDrop(event, rowId, itemIndex)
              }}
              className={cn(
                "group/item flex shrink-0 cursor-grab items-center gap-2 rounded-xl border border-border/50 bg-card/80 px-2.5 py-2 shadow-soft backdrop-blur-sm transition-all duration-300 active:cursor-grabbing hover:border-primary/25 hover:shadow-elevated sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-2.5",
                isDragged && "opacity-40"
              )}
            >
              <div className="relative flex h-6 w-6 shrink-0 items-center justify-center sm:h-8 sm:w-8">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={32}
                  height={32}
                  onError={(event) =>
                    cycleImageFallback(event, [r2ImageFallback, localImageFallback])
                  }
                  className="h-5 w-5 object-contain opacity-70 grayscale transition-all duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-110 sm:h-7 sm:w-7"
                />
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground sm:text-sm">
                {item.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

type TechMarqueeSectionProps = {
  row1: TechItem[]
  row2: TechItem[]
}

export default function TechMarquee({ row1, row2 }: TechMarqueeSectionProps) {
  const [rows, setRows] = useState({ frontend: row1, devops: row2 })
  const [draggedItem, setDraggedItem] = useState<{
    rowId: "frontend" | "devops"
    index: number
  } | null>(null)

  const handleDragStart = (
    event: DragEvent<HTMLDivElement>,
    rowId: "frontend" | "devops",
    index: number
  ) => {
    event.dataTransfer.effectAllowed = "move"
    event.dataTransfer.setData("text/plain", `${rowId}:${index}`)
    setDraggedItem({ rowId, index })
  }

  const handleDrop = (
    event: DragEvent<HTMLDivElement>,
    targetRowId: "frontend" | "devops",
    targetIndex: number
  ) => {
    const [sourceRowId, sourceIndexValue] = event.dataTransfer.getData("text/plain").split(":")
    const sourceIndex = Number(sourceIndexValue)

    if ((sourceRowId !== "frontend" && sourceRowId !== "devops") || Number.isNaN(sourceIndex)) {
      return
    }

    setRows((current) => {
      const sourceItems = [...current[sourceRowId]]
      const [movedItem] = sourceItems.splice(sourceIndex, 1)
      if (!movedItem) return current

      const targetItems = sourceRowId === targetRowId ? sourceItems : [...current[targetRowId]]
      const insertionIndex =
        sourceRowId === targetRowId && sourceIndex < targetIndex ? targetIndex - 1 : targetIndex
      targetItems.splice(Math.min(insertionIndex, targetItems.length), 0, movedItem)

      return sourceRowId === targetRowId
        ? { ...current, [sourceRowId]: targetItems }
        : { ...current, [sourceRowId]: sourceItems, [targetRowId]: targetItems }
    })
    setDraggedItem(null)
  }

  return (
    <div className="w-full space-y-2.5 overflow-hidden sm:space-y-4">
      <MarqueeRow
        items={rows.frontend}
        rowId="frontend"
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnd={() => setDraggedItem(null)}
        draggedItem={draggedItem}
        direction="left"
        speed="normal"
      />
      <MarqueeRow
        items={rows.devops}
        rowId="devops"
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragEnd={() => setDraggedItem(null)}
        draggedItem={draggedItem}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

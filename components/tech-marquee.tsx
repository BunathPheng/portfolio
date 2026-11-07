"use client"

import Image from "next/image"
import { GripVertical } from "lucide-react"
import { useState, type DragEvent } from "react"
import { cn } from "@/lib/utils"
import type { TechItem } from "@/lib/tech-stack"

type TechMarqueeProps = {
  items: TechItem[]
  rowId: "frontend" | "devops"
  onDropItem: (event: DragEvent<HTMLDivElement>, rowId: TechMarqueeProps["rowId"], index: number) => void
  onDragStart: (event: DragEvent<HTMLDivElement>, rowId: TechMarqueeProps["rowId"], index: number) => void
  onDragEnd: () => void
  draggedItem: { rowId: TechMarqueeProps["rowId"]; index: number } | null
  className?: string
}

function TechRow({
  items,
  rowId,
  onDropItem,
  onDragStart,
  onDragEnd,
  draggedItem,
  className,
}: TechMarqueeProps) {
  return (
    <div
      className={cn(
        "group/marquee relative w-full overflow-x-auto rounded-2xl border border-border/40 bg-secondary/20 p-2",
        "scrollbar-thin",
        className
      )}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => onDropItem(event, rowId, items.length)}
    >
      <div
        className="flex min-h-[58px] w-max min-w-full items-center gap-2 py-1 sm:gap-3"
      >
        {items.map((item, index) => (
          <div
            key={item.name}
            draggable
            onDragStart={(event) => onDragStart(event, rowId, index)}
            onDragEnd={onDragEnd}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.stopPropagation()
              onDropItem(event, rowId, index)
            }}
            className={cn(
              "group/item flex shrink-0 cursor-grab items-center gap-1.5 rounded-xl border border-border/50 bg-card/80 px-2.5 py-2 shadow-soft backdrop-blur-sm transition-all duration-300 active:cursor-grabbing hover:border-primary/40 hover:shadow-elevated sm:gap-2 sm:rounded-2xl sm:px-3.5 sm:py-2.5",
              draggedItem?.rowId === rowId && draggedItem.index === index && "opacity-40"
            )}
            aria-label={`Drag ${item.name} to reorder technologies`}
          >
            <GripVertical className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition-colors group-hover/item:text-primary" />
            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center sm:h-8 sm:w-8">
              <Image
                src={item.image}
                alt={item.name}
                width={32}
                height={32}
                className="h-5 w-5 object-contain opacity-70 grayscale transition-all duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-110 sm:h-7 sm:w-7"
              />
            </div>
            <span className="whitespace-nowrap text-[11px] font-medium text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground sm:text-sm">
              {item.name}
            </span>
          </div>
        ))}
        <span className="px-2 text-xs text-muted-foreground/60 sm:px-3">Drop here</span>
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
    event.preventDefault()
    const source = event.dataTransfer.getData("text/plain").split(":")
    const sourceRowId = source[0] as "frontend" | "devops"
    const sourceIndex = Number(source[1])

    if (!rows[sourceRowId] || Number.isNaN(sourceIndex)) return

    setRows((current) => {
      const sourceItems = [...current[sourceRowId]]
      const [movedItem] = sourceItems.splice(sourceIndex, 1)
      if (!movedItem) return current

      const targetItems = sourceRowId === targetRowId ? sourceItems : [...current[targetRowId]]
      const adjustedIndex =
        sourceRowId === targetRowId && sourceIndex < targetIndex ? targetIndex - 1 : targetIndex
      targetItems.splice(Math.min(adjustedIndex, targetItems.length), 0, movedItem)

      return sourceRowId === targetRowId
        ? { ...current, [sourceRowId]: targetItems }
        : { ...current, [sourceRowId]: sourceItems, [targetRowId]: targetItems }
    })
    setDraggedItem(null)
  }

  return (
    <div className="w-full space-y-3 sm:space-y-4">
      <div className="flex items-center justify-between gap-3 px-1">
        <p className="text-xs text-muted-foreground">
          Drag technologies to reorder or move them between rows.
        </p>
        <GripVertical className="h-4 w-4 shrink-0 text-primary/70" aria-hidden />
      </div>
      <TechRow
        items={rows.frontend}
        rowId="frontend"
        onDropItem={handleDrop}
        onDragStart={handleDragStart}
        onDragEnd={() => setDraggedItem(null)}
        draggedItem={draggedItem}
      />
      <TechRow
        items={rows.devops}
        rowId="devops"
        onDropItem={handleDrop}
        onDragStart={handleDragStart}
        onDragEnd={() => setDraggedItem(null)}
        draggedItem={draggedItem}
      />
    </div>
  )
}

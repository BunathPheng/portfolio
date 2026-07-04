"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { TechItem } from "@/lib/tech-stack"

type TechMarqueeProps = {
  items: TechItem[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
}

function MarqueeRow({ items, direction = "left", speed = "normal", className }: TechMarqueeProps) {
  const duplicated = [...items, ...items]

  return (
    <div
      className={cn(
        "group/marquee relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]",
        "sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-2.5 py-2 sm:gap-4",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          speed === "slow" && (direction === "left" ? "![animation-duration:45s]" : "![animation-duration:50s]"),
          speed === "normal" && (direction === "left" ? "![animation-duration:32s]" : "![animation-duration:36s]"),
          speed === "fast" && (direction === "left" ? "![animation-duration:22s]" : "![animation-duration:26s]"),
          "motion-reduce:![animation-play-state:paused]",
          "group-hover/marquee:[animation-play-state:paused]"
        )}
      >
        {duplicated.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="group/item flex shrink-0 items-center gap-2 rounded-xl border border-border/50 bg-card/80 px-3 py-2 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary/25 hover:shadow-elevated sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-3"
          >
            <div className="relative flex h-7 w-7 shrink-0 items-center justify-center sm:h-9 sm:w-9">
              <Image
                src={item.image}
                alt={item.name}
                width={36}
                height={36}
                className="h-6 w-6 object-contain opacity-70 grayscale transition-all duration-300 group-hover/item:opacity-100 group-hover/item:grayscale-0 group-hover/item:scale-110 sm:h-8 sm:w-8"
              />
            </div>
            <span className="whitespace-nowrap text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover/item:text-foreground sm:text-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

type TechMarqueeSectionProps = {
  row1: TechItem[]
  row2: TechItem[]
}

export default function TechMarquee({ row1, row2 }: TechMarqueeSectionProps) {
  return (
    <div className="-mx-4 space-y-3 sm:-mx-0 sm:space-y-5">
      <MarqueeRow items={row1} direction="left" speed="normal" />
      <MarqueeRow items={row2} direction="right" speed="slow" />
    </div>
  )
}

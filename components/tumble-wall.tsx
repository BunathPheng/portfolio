"use client"

import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"
import { useState } from "react"
import { FadeIn, SectionHeader } from "@/components/section-header"
import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

export default function TumbleWall() {
  const { devopsLifecycle } = usePortfolioData()
  const [resetKey, setResetKey] = useState(0)
  const tags = [
    "React",
    "Next.js",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "GitOps",
    "CI/CD",
    "Observability",
  ]

  return (
    <section id="ui-playground" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="UI Playground"
          title="Move the pieces around"
          description="A tactile snapshot of the tools and ideas behind my work. Drag any card and throw it across the wall."
          align="center"
        />

        <FadeIn>
          <div className="relative mx-auto h-[28rem] max-w-4xl overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-card to-violet-500/[0.08] shadow-[var(--shadow-elevated)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_55%)]" />
            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Tumble wall
            </div>
            <button
              type="button"
              onClick={() => setResetKey((key) => key + 1)}
              className="absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Reset the Tumble Wall"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>

            {tags.map((tag, index) => (
              <motion.div
                key={`${tag}-${resetKey}`}
                drag
                dragConstraints={{ left: -150, right: 150, top: -110, bottom: 110 }}
                dragElastic={0.75}
                whileDrag={{ scale: 1.08, zIndex: 30, cursor: "grabbing" }}
                initial={{ y: -180, x: (index % 4) * 70 - 105, rotate: (index % 2 ? 1 : -1) * (8 + index) }}
                animate={{ y: (index % 3) * 32 - 24, x: (index % 4) * 105 - 155, rotate: (index % 2 ? 1 : -1) * (index + 2) }}
                transition={{ type: "spring", stiffness: 90, damping: 12, delay: index * 0.07 }}
                className="absolute left-1/2 top-1/2 z-10 cursor-grab touch-none rounded-xl border border-primary/20 bg-background/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-elevated)] backdrop-blur-md"
              >
                {tag}
              </motion.div>
            ))}

            {devopsLifecycle.slice(0, 6).map((stage, index) => (
              <motion.div
                key={`${stage.step}-${resetKey}`}
                drag
                dragConstraints={{ left: -160, right: 160, top: -120, bottom: 120 }}
                dragElastic={0.8}
                whileDrag={{ scale: 1.08, zIndex: 30, cursor: "grabbing" }}
                initial={{ y: -260, x: index * 30 - 85, rotate: index % 2 ? 10 : -10 }}
                animate={{ y: index * 13 - 38, x: index * 72 - 180, rotate: index % 2 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 85, damping: 13, delay: 0.35 + index * 0.08 }}
                className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 cursor-grab touch-none items-center justify-center rounded-2xl border border-border/60 bg-card/95 p-3 shadow-[var(--shadow-elevated)] backdrop-blur-md"
              >
                <img
                  src={stage.image}
                  alt={`${stage.title} logo`}
                  className="h-full w-full object-contain"
                  onError={(event) => cycleImageFallback(event, [r2ImageFallback, localImageFallback])}
                />
              </motion.div>
            ))}

            <p className="absolute bottom-5 left-0 right-0 text-center text-xs text-muted-foreground/70">
              Drag a card to explore
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

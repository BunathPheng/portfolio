"use client"

import { ArrowDown, CheckCircle2 } from "lucide-react"
import { FadeIn, SectionHeader } from "@/components/section-header"
import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

export default function DevOpsRoadmap() {
  const { devopsLifecycle } = usePortfolioData()

  if (!devopsLifecycle.length) return null

  return (
    <section id="roadmap" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="DevOps Roadmap"
          title="From commit to confidence"
          description="A practical delivery path for building, shipping, and operating reliable software."
        />

        <div className="relative">
          <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-5 sm:space-y-8">
            {devopsLifecycle.map((stage, index) => (
              <FadeIn key={stage.step} delay={index * 0.04}>
                <article className="relative grid gap-4 sm:grid-cols-2 sm:gap-10">
                  <div className={`flex items-center gap-4 ${index % 2 ? "sm:col-start-2" : "sm:text-right"}`}>
                    <div className={`flex-1 ${index % 2 ? "sm:order-2 sm:text-left" : ""}`}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Stage {stage.step}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">{stage.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {stage.description}
                      </p>
                    </div>
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-soft">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  <div className={`hidden items-center sm:flex ${index % 2 ? "sm:col-start-1 sm:row-start-1 sm:justify-end" : ""}`}>
                    <div className="glass-panel flex h-16 w-16 items-center justify-center rounded-2xl p-3">
                      <img
                        src={stage.image}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="h-full w-full object-contain"
                        onError={(event) => cycleImageFallback(event, [r2ImageFallback, localImageFallback])}
                      />
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 flex justify-center text-primary/60">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowDown, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
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
          <div className="absolute bottom-8 left-5 top-8 w-px overflow-hidden bg-primary/10 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-primary/30 via-primary to-primary/30"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="space-y-5 sm:space-y-8">
            {devopsLifecycle.map((stage, index) => (
              <FadeIn key={stage.step} delay={index * 0.04}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative grid gap-4 sm:grid-cols-2 sm:gap-10"
                >
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
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <CheckCircle2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>
                  <div className={`hidden items-center sm:flex ${index % 2 ? "sm:col-start-1 sm:row-start-1 sm:justify-end" : ""}`}>
                    <div className="glass-panel flex h-16 w-16 items-center justify-center rounded-2xl p-3 transition-all duration-300 group-hover:-rotate-3 group-hover:border-primary/40 group-hover:shadow-elevated">
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
                </motion.article>
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

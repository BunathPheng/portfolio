"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, CheckCircle2 } from "lucide-react"
import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

export default function DevOpsLifecycle() {
  const { devopsLifecycle } = usePortfolioData()
  const reduceMotion = useReducedMotion()

  if (!devopsLifecycle.length) return null

  return (
    <section id="devops-lifecycle" className="section-spacing relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <p className="section-label justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Delivery map
          </p>
          <h2 className="section-title mt-3">
            From idea to <span className="nature-text">reliable production</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A connected DevOps sequence that turns each change into a safer, observable release.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="lifecycle-route" aria-hidden />
          <div className="space-y-8 sm:space-y-12">
            {devopsLifecycle.map((stage, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className={`relative flex items-center gap-5 sm:gap-10 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  <div className="hidden flex-1 sm:block" />
                  <div className="lifecycle-node">
                    <span>{stage.step}</span>
                  </div>
                  <motion.article
                    whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                    className={`lifecycle-map-card flex-1 ${isEven ? "sm:text-left" : "sm:text-right"}`}
                  >
                    <div className={`lifecycle-map-image bg-gradient-to-br ${stage.color}`}>
                      <img
                        src={stage.image}
                        alt={`${stage.title} technology`}
                        loading="lazy"
                        onError={(event) =>
                          cycleImageFallback(event, [r2ImageFallback, localImageFallback])
                        }
                      />
                    </div>
                    <div className="min-w-0">
                      <div className={`flex items-center gap-2 ${isEven ? "sm:justify-start" : "sm:justify-end"}`}>
                        <h3 className="text-base font-semibold text-foreground sm:text-lg">{stage.title}</h3>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400/80" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{stage.description}</p>
                    </div>
                  </motion.article>
                  {index < devopsLifecycle.length - 1 && (
                    <ArrowDown className="absolute -bottom-7 left-1/2 h-4 w-4 -translate-x-1/2 text-emerald-400/60 sm:hidden" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

export default function DevOpsLifecycle() {
  const { devopsLifecycle } = usePortfolioData()

  if (!devopsLifecycle.length) return null

  return (
    <section id="devops-lifecycle" className="section-spacing relative overflow-hidden">
      <div className="section-container">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="section-label justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Delivery map
          </p>
          <h2 className="section-title mt-3">
            From idea to <span className="nature-text">reliable production</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A connected DevOps roadmap for turning changes into safe, observable releases.
          </p>
        </div>

        <div className="devops-roadmap">
          <div className="devops-roadmap-heading">DEVOPS ROADMAP</div>
          <svg className="devops-roadmap-path" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden>
            <path d="M75 112 H925 C965 112 965 250 925 250 H75 C35 250 35 388 75 388 H925" />
          </svg>

          <div className="devops-roadmap-grid">
            {devopsLifecycle.map((stage, index) => (
              <article key={stage.step} className={`devops-roadmap-node devops-roadmap-node-${index + 1}`}>
                <div className={`devops-roadmap-icon bg-gradient-to-br ${stage.color}`}>
                  <img
                    src={stage.image}
                    alt={`${stage.title} technology`}
                    loading="lazy"
                    onError={(event) =>
                      cycleImageFallback(event, [r2ImageFallback, localImageFallback])
                    }
                  />
                </div>
                <div className="devops-roadmap-label">
                  <span>{stage.title}</span>
                  <small>{stage.description}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="devops-roadmap-footer">BUILD · SHIP · OBSERVE · IMPROVE</div>
        </div>
      </div>
    </section>
  )
}

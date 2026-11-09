"use client"

import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback, r2ImageFallback } from "@/lib/assets"
import { cycleImageFallback } from "@/lib/image-fallback"

export default function DevOpsLifecycle() {
  const { devopsLifecycle } = usePortfolioData()

  if (!devopsLifecycle.length) return null

  return (
    <div aria-hidden id="devops-lifecycle" className="devops-roadmap-background">
      <div className="devops-roadmap">
          <svg className="devops-roadmap-path" viewBox="0 0 1000 900" preserveAspectRatio="none" aria-hidden>
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
              </article>
            ))}
          </div>
      </div>
    </div>
  )
}

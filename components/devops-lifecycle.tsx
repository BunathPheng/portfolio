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
          <div className="devops-roadmap-mountains" />
          <svg className="devops-roadmap-path" viewBox="0 0 1000 900" preserveAspectRatio="none" aria-hidden>
            <path className="devops-roadmap-road" d="M90 790 C300 710 730 760 870 610 C980 490 720 445 470 510 C210 580 120 430 280 350 C440 270 760 330 860 190" />
            <path className="devops-roadmap-road-line" d="M90 790 C300 710 730 760 870 610 C980 490 720 445 470 510 C210 580 120 430 280 350 C440 270 760 330 860 190" />
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
                <div className="devops-roadmap-callout">
                  <strong><b>{stage.step}</b>{stage.title}</strong>
                  <span>{stage.description}</span>
                </div>
              </article>
            ))}
          </div>
      </div>
    </div>
  )
}

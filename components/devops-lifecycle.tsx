"use client"

import { usePortfolioData } from "@/components/portfolio-data-provider"
import { localImageFallback } from "@/lib/assets"

export default function DevOpsLifecycle() {
  const { devopsLifecycle } = usePortfolioData()
  const pipelineStages = devopsLifecycle.slice(0, 7)
  const observabilityStages = devopsLifecycle.slice(7, 10)

  if (!pipelineStages.length) return null

  return (
    <div aria-hidden id="devops-lifecycle" className="devops-roadmap-background">
      <div className="devops-pipeline">
        <div className="devops-pipeline-main">
          {pipelineStages.map((stage, index) => (
            <div className="devops-pipeline-step" key={stage.step}>
              <div className={`devops-pipeline-icon bg-gradient-to-br ${stage.color}`}>
                <img
                  src={stage.image}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== localImageFallback) {
                      event.currentTarget.src = localImageFallback
                    }
                  }}
                />
              </div>
              <span className="devops-pipeline-label">{stage.title}</span>
              {index < pipelineStages.length - 1 && <span className="devops-pipeline-arrow">↓</span>}
            </div>
          ))}
        </div>

        <div className="devops-pipeline-branch devops-pipeline-branch-security">
          <span className="devops-pipeline-branch-line" />
          <span>SonarQube</span>
          <span>Trivy</span>
        </div>

        <div className="devops-pipeline-observability">
          {observabilityStages.map((stage) => (
            <div className="devops-pipeline-observability-item" key={stage.step}>
              <div className={`devops-pipeline-icon bg-gradient-to-br ${stage.color}`}>
                <img
                  src={stage.image}
                  alt=""
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== localImageFallback) {
                      event.currentTarget.src = localImageFallback
                    }
                  }}
                />
              </div>
              <span>{stage.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

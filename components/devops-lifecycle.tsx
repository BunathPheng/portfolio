"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const lifecycle = [
  {
    step: "01",
    title: "Plan",
    description: "Shape requirements, architecture, and delivery goals before implementation.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    step: "02",
    title: "Code",
    description: "Build maintainable features with Git workflows, reviews, and shared standards.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "from-orange-500/20 to-amber-500/10",
  },
  {
    step: "03",
    title: "Build",
    description: "Compile, package, and create repeatable artifacts through automated pipelines.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    color: "from-red-500/20 to-orange-500/10",
  },
  {
    step: "04",
    title: "Test",
    description: "Validate quality with automated checks before changes reach an environment.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
    color: "from-cyan-500/20 to-sky-500/10",
  },
  {
    step: "05",
    title: "Release",
    description: "Version trusted artifacts and prepare transparent, traceable releases.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "from-slate-500/20 to-indigo-500/10",
  },
  {
    step: "06",
    title: "Deploy",
    description: "Deliver safely with containers, Kubernetes, GitOps, and progressive rollouts.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    step: "07",
    title: "Operate",
    description: "Keep services resilient with infrastructure automation and dependable runbooks.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    color: "from-violet-500/20 to-blue-500/10",
  },
  {
    step: "08",
    title: "Monitor",
    description: "Observe health, performance, and user impact to continuously improve delivery.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    color: "from-orange-500/20 to-red-500/10",
  },
]

export default function DevOpsLifecycle() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="devops-lifecycle" className="section-spacing relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl sm:mb-14"
        >
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            DevOps lifecycle
          </p>
          <h2 className="section-title mt-3">
            From idea to <span className="nature-text">reliable production</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A complete delivery loop that connects people, automation, infrastructure, and
            observability into one calm, repeatable engineering system.
          </p>
        </motion.div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycle.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="lifecycle-card group"
            >
              <div className={`lifecycle-image bg-gradient-to-br ${item.color}`}>
                <img src={item.image} alt={`${item.title} technology`} loading="lazy" />
                <span>{item.step}</span>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400/70 transition-colors group-hover:text-emerald-400" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.description}</p>
              </div>
              {index < lifecycle.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-emerald-400/60 lg:block" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

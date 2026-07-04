"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { SectionHeader, FadeIn } from "@/components/section-header"
import { projects } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import MagneticButton from "@/components/magnetic-button"

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Selected case studies"
          description="Deep dives into recent work across DevOps automation, full-stack development, and platform engineering."
        />

        <div className="space-y-14 sm:space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <article className="group">
                <div
                  className={`grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 ${
                    index % 2 === 1 ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
                  }`}
                >
                  <div className="relative glass-frame">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium sm:text-sm">
                        {project.category}
                      </Badge>
                      <span className="text-xs font-medium text-muted-foreground">
                        Case Study {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                      <div className="rounded-xl border border-border/60 bg-secondary/40 p-3 sm:rounded-2xl sm:p-4">
                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                          Problem
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.problem}</p>
                      </div>
                      <div className="rounded-xl border border-border/60 bg-secondary/40 p-3 sm:rounded-2xl sm:p-4">
                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                          Solution
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.solution}</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-card p-4 shadow-soft sm:rounded-2xl sm:p-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                        Architecture
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{project.architecture}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-primary sm:mb-3 sm:text-xs">
                          My Contribution
                        </p>
                        <ul className="space-y-2">
                          {project.contribution.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-primary sm:mb-3 sm:text-xs">
                          Results
                        </p>
                        <ul className="space-y-2">
                          {project.results.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 pt-1 xs:flex-row xs:flex-wrap sm:flex-row">
                      {project.liveUrl !== "#" && (
                        <MagneticButton as="a" href={project.liveUrl} variant="primary" className="!w-full sm:!w-auto">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </MagneticButton>
                      )}
                      <MagneticButton
                        as="a"
                        href={project.githubUrl}
                        variant="secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!w-full sm:!w-auto"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Cloud, Database, Layout, Wrench } from "lucide-react"
import { SectionHeader, FadeIn } from "@/components/section-header"
import TechMarquee from "@/components/tech-marquee"
import { skillGroups } from "@/lib/content"
import { techStackRow1, techStackRow2 } from "@/lib/tech-stack"

const iconMap = {
  cloud: Cloud,
  layout: Layout,
  database: Database,
  tool: Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="The tools and platforms I use to build, deploy, and maintain production systems at scale."
        />

        <FadeIn className="mb-10 sm:mb-14">
          <TechMarquee row1={techStackRow1} row2={techStackRow2} />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon]
            return (
              <FadeIn key={group.category} delay={index * 0.08}>
                <div className="group surface-card h-full !p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

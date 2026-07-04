import { Calendar, MapPin } from "lucide-react"
import { SectionHeader, FadeIn } from "@/components/section-header"
import { experiences } from "@/lib/content"

export default function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Professional journey"
          description="Hands-on experience building automation platforms, backend services, and full-stack applications."
        />

        <div className="relative">
          <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-[19px]" />

          <div className="space-y-5 sm:space-y-6">
            {experiences.map((exp, index) => (
              <FadeIn key={exp.title} delay={index * 0.08}>
                <div className="relative pl-8 sm:pl-12">
                  <div className="absolute left-2.5 top-6 h-[10px] w-[10px] rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_hsl(var(--primary)/0.15)] sm:left-3.5 sm:top-7" />

                  <div className="surface-card !p-5 sm:!p-7">
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0 space-y-1.5 sm:space-y-2">
                        <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">{exp.title}</h3>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground sm:gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 sm:px-3">
                          <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 sm:px-3">
                          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:mt-4 sm:text-sm">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

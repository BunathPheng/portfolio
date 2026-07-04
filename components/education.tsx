import { GraduationCap, Calendar } from "lucide-react"
import { SectionHeader, FadeIn } from "@/components/section-header"
import { education } from "@/lib/content"

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="Education"
          title="Academic background"
          description="Formal education and specialized training in computer science, DevOps, and software engineering."
        />

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <FadeIn key={item.degree} delay={index * 0.06}>
              <div className="group surface-card flex h-full flex-col !p-5 sm:!p-7">
                <div className="mb-3 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:h-11 sm:w-11">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium text-muted-foreground sm:px-3 sm:text-xs">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.degree}</h3>
                <p className="mt-1 text-xs font-medium text-primary sm:text-sm">{item.field}</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{item.school}</p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

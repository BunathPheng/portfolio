import { Award, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react"
import { SectionHeader, FadeIn } from "@/components/section-header"

const highlights = [
  "CI/CD pipelines with Jenkins, GitHub Actions & Argo CD",
  "Container orchestration on Docker & Kubernetes",
  "Full-stack development with Next.js, React & Spring Boot",
  "Infrastructure automation with Ansible & Linux",
]

const stats = [
  { number: "3+", label: "Production Projects" },
  { number: "1+", label: "Years Experience" },
  { number: "15+", label: "Technologies" },
  { number: "100%", label: "Delivery Focus" },
]

const credentials = [
  {
    icon: Award,
    title: "KSHRD DevOps Advanced",
    subtitle: "Korea Software HRD Center",
    detail: "CI/CD, Kubernetes, GitOps & cloud infrastructure",
  },
  {
    icon: GraduationCap,
    title: "Computer Science (BSc)",
    subtitle: "Royal University of Phnom Penh",
    detail: "Fourth-year student, software engineering focus",
  },
  {
    icon: Briefcase,
    title: "Production Experience",
    subtitle: "SmartOps · Selamounty · English Club",
    detail: "DevOps, backend & full-stack project delivery",
  },
]

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Building systems that scale"
          description="DevOps engineer and full-stack developer focused on reliable infrastructure, automated delivery, and polished user experiences."
        />

        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="space-y-8">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Pheng Bunath — a DevOps Engineer and Full-Stack Developer who bridges
                infrastructure and application development. I design CI/CD pipelines, deploy
                containerized workloads, and build interfaces that users love.
              </p>
              <p>
                Currently a fourth-year Computer Science student at the Royal University of Phnom
                Penh, I&apos;ve completed intensive training at the Korea Software HRD Center where
                I delivered production projects across DevOps, backend, and frontend domains.
              </p>
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card !p-4 sm:!p-5">
                  <div className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            {credentials.map((item) => (
              <div key={item.title} className="group surface-card flex gap-3 !p-4 sm:gap-4 sm:!p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-primary">{item.subtitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

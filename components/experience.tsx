import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer – SmartOps Automation Platform",
      company: "Korea Software HRD Center",
      location: "Phnom Penh, Cambodia",
      period: "2025 - 2025",
      description:
        "Built an automated platform covering the full deployment lifecycle—from repo to production—using GitOps and CI/CD to simplify, speed up, and de-risk releases.",
      technologies: ["Jenkins", "GitHub Actions", "Argo CD", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
    },
    {
      title: "Backend / Platform Engineer – Selamounty (Virtual Museum Hub)",
      company: "Korea Software HRD Center",
      location: "Phnom Penh, Cambodia",
      period: "2025 - 2025",
      description:
        "Delivered a digital cultural and educational platform with automated deployments, API services, and resilient runtime for global visitors.",
      technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Docker", "Nginx"],
    },
    {
      title: "Front-End Developer – English Club Platform",
      company: "Institute of Science and Technology Advanced Development",
      location: "Phnom Penh, Cambodia",
      period: "2024 - 2024",
      description:
        "Built an education platform enabling learners to practice English (speaking, listening, reading, writing) with authenticated user flows and dashboards.",
      technologies: ["Next.js", "TypeScript", "JWT", "REST APIs", "Tailwind CSS"],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="gradient-text">
              Experience
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#22d3ee]/30 via-white/5 to-[#7ce94f]/30" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 sm:pl-16">
                <div className="absolute left-2 sm:left-5 top-3 w-3 h-3 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] shadow-[0_0_0_4px_rgba(34,211,238,0.12)]" />

                <div className="glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#22d3ee]/40 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                  <div className="flex flex-wrap items-center gap-3 text-[#22d3ee]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22d3ee]/10 text-xs font-semibold">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-[#7ce94f]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sm font-semibold text-[#7ce94f]">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[#22d3ee]/12 text-[#22d3ee] text-xs font-medium border border-[#22d3ee]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
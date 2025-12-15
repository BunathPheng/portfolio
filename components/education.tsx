import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import edu from "../portfolio/src/image/eduction.png"
export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      field: "Royal University of Phnom Penh (RUPP)",
      school: "Royal University of Phnom Penh",
      period: "Jan 2022 - Present",
      description: "Comprehensive CS curriculum with focus on software engineering and systems.",
    },
    {
      degree: "Advanced Course: DevOps",
      field: "Korea Software HRD Center (KSHRD)",
      school: "Korea Software HRD Center",
      period: "Jul 28 - Dec 11, 2025",
      description:
        "Modern CI/CD, containerization, cloud infrastructure, GitOps with Jenkins, GitHub Actions, Argo CD, Docker, and Kubernetes.",
    },
    {
      degree: "Basic Course Training",
      field: "Korea Software HRD Center (KSHRD)",
      school: "Korea Software HRD Center",
      period: "Feb 3 - Jul 10, 2025",
      description:
        "Foundation across Linux, Docker, Git, UI/UX, Java (J2SE/J2EE), HTML/CSS/JS, Tailwind CSS, PostgreSQL, and responsive web apps.",
    },
    {
      degree: "Foundation 2 Generation",
      field: "Institute of Science and Technology Advanced Development (ISTAD)",
      school: "ISTAD",
      period: "Jan 2025 - Present",
      description: "Core software engineering foundations and collaborative projects.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="gradient-text">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-subtle rounded-2xl p-6 hover:glass hover:border-[#22d3ee]/50 transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-[#22d3ee]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] rounded-xl">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-[#22d3ee] font-medium">{edu.field}</p>
                      <p className="text-gray-400">{edu.school}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative glass rounded-3xl p-6">
                <Image
                  src={edu}
                  alt="Education"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"
import edu from "../portfolio/src/image/eduction.png"
export default function Education() {
  const education = [
    {
      degree: "Bachelor Degree",
      field: "Computer Science",
      school: "Royal University of Phnom Penh",
      period: "2023 - 2027",
      description:
        "Pursuing a comprehensive education in computer science with focus on software engineering and web development.",
    },
    {
      degree: "Full Stack Development",
      field: "Web Development",
      school: "Center of Science and Technology Advanced Development (CSTAD)",
      period: "2023 - 2024",
      description:
        "Intensive program covering modern web development technologies including React, Node.js, and database management.",
    },
    {
      degree: "High School Diploma",
      field: "Science",
      school: "Local High School",
      period: "2020 - 2023",
      description: "Completed secondary education with focus on mathematics and science subjects.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-purple-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium">{edu.field}</p>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
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

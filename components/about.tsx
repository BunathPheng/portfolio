import Image from "next/image"
import nath from "../portfolio/src/image/boynath.jpg"
export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m Pheng Bunath, a DevOps Engineer and Full-Stack Developer. I focus on cloud platforms, CI/CD, container
              orchestration, and infrastructure automation to ship reliable software quickly.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a fourth-year Computer Science student at the Royal University of Phnom Penh. Through intensive
              training at the Korea Software HRD Center, I delivered full-stack projects, built CI/CD pipelines, and
              automated deployments across Linux, Docker, and Kubernetes. I’m driven by improving software delivery and
              creating scalable, resilient systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: "3+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" },
                { number: "10+", label: "Technologies" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 glass-subtle rounded-xl"
                >
                  <div className="text-2xl font-bold text-[#22d3ee]">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative glass rounded-3xl p-6">
                <Image
                  src={nath}
                  alt="Pheng Bunath"
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

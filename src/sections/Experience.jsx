import { FiBriefcase } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// experience</p>
        <h2 className="section-title">
          Internships &amp; <span className="gradient-text">training</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="relative pl-6 space-y-8 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-gradient-to-b before:from-accent-blue before:to-accent-violet">
        {experience.map((exp, i) => (
          <Reveal key={exp.role + i} delay={i * 0.1} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-grad-primary shadow-glow" />
            <div className="glass-card p-6">
              <div className="flex flex-wrap items-center gap-2 justify-between mb-1">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <FiBriefcase className="text-accent-blue" size={18} /> {exp.role}
                </h3>
                <span className="text-xs font-semibold text-accent-violet">{exp.period}</span>
              </div>
              <p className="text-slate-300 font-medium mb-1">{exp.org}</p>
              <p className="text-slate-500 text-sm">{exp.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

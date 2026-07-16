import { FiBookOpen } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// education</p>
        <h2 className="section-title">
          Academic <span className="gradient-text">background</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.1}>
            <div className="glass-card p-6 md:p-7 flex gap-5">
              <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-grad-primary">
                <FiBookOpen className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-accent-blue mb-1">{edu.year}</p>
                <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                <p className="text-slate-300 font-medium">{edu.degree}</p>
                <p className="text-slate-500 text-sm mt-1">{edu.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

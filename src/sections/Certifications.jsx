import { FiAward } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// certifications</p>
        <h2 className="section-title">
          Licenses &amp; <span className="gradient-text">certifications</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.06}>
            <div className="glass-card p-5 flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-grad-primary">
                <FiAward className="text-white" size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-white">{cert.title}</h3>
                <p className="text-xs text-accent-blue font-medium mb-1">{cert.issuer}</p>
                <p className="text-slate-500 text-sm">{cert.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

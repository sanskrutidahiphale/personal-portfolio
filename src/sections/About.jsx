import { FiMapPin, FiDownload } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { about, profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// about me</p>
        <h2 className="section-title">
          Get to know <span className="gradient-text">me</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <Reveal delay={0.1} className="space-y-4 text-slate-400 text-base md:text-lg">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <a href={profile.resumeUrl} download className="btn-ghost mt-4">
            <FiDownload size={18} /> Download Resume
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass-card p-6 space-y-5">
            <div className="flex items-center gap-2 text-white font-semibold">
              <FiMapPin className="text-accent-blue" /> {profile.location}
            </div>
            <ul className="space-y-4">
              {about.facts.map((fact) => (
                <li key={fact.label} className="border-l-2 border-accent-blue/60 pl-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
                  <p className="text-slate-200 font-medium">{fact.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

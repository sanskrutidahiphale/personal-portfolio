import Reveal from '../components/Reveal'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// skills</p>
        <h2 className="section-title">
          What I work <span className="gradient-text">with</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-accent-blue font-semibold mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="pill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

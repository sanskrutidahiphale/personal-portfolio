import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// projects</p>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h2>
        <div className="underline-accent" />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <div className="glass-card p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-accent-violet border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-accent-blue transition-colors"
                >
                  <FiGithub size={16} /> Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-accent-violet transition-colors"
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

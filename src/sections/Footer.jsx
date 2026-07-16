import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { profile, navItems } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-base-950">
      <div className="section-wrap !py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-lg text-white mb-2">
            {profile.name}
            <span className="text-accent-blue">.</span>
          </p>
          <p className="text-slate-500 text-sm max-w-xs">{profile.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-300 mb-3">Quick Links</p>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-500 hover:text-accent-blue transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-300 mb-3">Find me on</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-accent-blue/50 transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-accent-violet/50 transition-colors">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email"
               className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-accent-pink/50 transition-colors">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-600 flex items-center justify-center gap-1.5">
        © {year} {profile.name}. Personal Portfolio
      </div>
    </footer>
  )
}

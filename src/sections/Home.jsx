import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { profile } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Ambient gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-grad-radial-blue blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-grad-radial-violet blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="section-wrap grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="section-eyebrow">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 text-2xl md:text-3xl font-semibold text-slate-300"
          >
            {profile.role}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-slate-400 text-base md:text-lg"
          >
            {profile.tagline} Based in {profile.location}.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 hover:text-accent-blue transition-colors duration-200"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 hover:text-accent-violet transition-colors duration-200"
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-grad-primary blur-2xl opacity-40 animate-pulse" />
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full p-1 bg-grad-primary shadow-glow-lg">
              <div className="h-full w-full rounded-full bg-base-900 overflow-hidden">
                <img src={profile.avatarImage} alt={profile.name} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}

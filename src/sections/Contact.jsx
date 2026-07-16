import { motion } from 'framer-motion'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiDownload,
} from 'react-icons/fi'
import Reveal from '../components/Reveal'
import { profile } from '../data/portfolioData'

export default function Contact() {
  const contactCards = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    {
      label: 'Phone',
      value: '+91 9607153390',
      href: 'tel:+919607153390',
      icon: FiPhone,
    },
    {
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#',
      icon: FiMapPin,
    },
    {
      label: 'GitHub',
      value: profile.github.replace('https://', ''),
      href: profile.github,
      icon: FiGithub,
    },
    {
      label: 'LinkedIn',
      value: profile.linkedin.replace('https://', ''),
      href: profile.linkedin,
      icon: FiLinkedin,
    },
  ]

  return (
    <section id="contact" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">// contact</p>

        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div className="underline-accent" />

        <p className="text-slate-400 max-w-2xl mb-10 leading-7">
          I'm currently seeking Software Development, AI/ML, and Full Stack
          internship opportunities. If you'd like to discuss a project,
          internship, or collaboration, feel free to connect with me through
          any of the platforms below.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {contactCards.map(({ label, value, href, icon: Icon }) => (
          <Reveal key={label}>
            <motion.a
              href={label === 'Location' ? undefined : href}
              target={
                label === 'GitHub' || label === 'LinkedIn'
                  ? '_blank'
                  : undefined
              }
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card flex items-center gap-4 p-5 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad-primary">
                <Icon className="text-white" size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-accent-blue font-semibold">
                  {label}
                </p>

                <p className="text-slate-200 font-medium break-all">
                  {value}
                </p>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>

      {/* Resume Button */}

      <Reveal delay={0.3}>
        <div className="mt-10 flex justify-center">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            <FiDownload size={18} />
            Download Resume
          </motion.a>
        </div>
      </Reveal>
    </section>
  )
}
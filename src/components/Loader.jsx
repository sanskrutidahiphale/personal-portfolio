import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/portfolioData'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-white/10 border-t-accent-blue border-r-accent-violet"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.p
            className="mt-6 font-display font-semibold tracking-wide text-slate-300"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {profile.name.split(' ')[0]}<span className="gradient-text">.dev</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

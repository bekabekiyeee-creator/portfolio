import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Beket Mitiku</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-400 mb-4"
        >
          Full-Stack Developer & Problem Solver
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Building impactful software solutions for communities. Passionate about Python, Web Development, AI, and Android. <br/>
          <span className="text-primary-400">Addiscoder 2025 Alumni</span> • <span className="text-primary-400">Bruh Ethiopia Innovator</span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Work <FiArrowRight />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 text-gray-400"
        >
          <a
            href="https://github.com/bekabekiyeee-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 transition-colors duration-300 hover:scale-110"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-400 transition-colors duration-300 hover:scale-110"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="mailto:bekiakundi5@gmail.com"
            className="hover:text-primary-400 transition-colors duration-300 hover:scale-110"
          >
            <FiMail size={28} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

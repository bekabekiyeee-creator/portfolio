import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-dark-900 relative overflow-hidden pt-20 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-400 font-semibold">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="gradient-text">Beket</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              Full-stack developer passionate about building innovative solutions for community development. Winner of Bruh Ethiopia 2025 and Addiscoder alumni.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch <FiArrowRight />
              </a>
              <a
                href="https://github.com/bekabekiyeee-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2"
              >
                <FiGithub /> GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-64 h-64 border-2 border-primary-500 border-opacity-20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 border-2 border-primary-400 border-opacity-30 rounded-full"
              />
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-5xl">💻</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

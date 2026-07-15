import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi'

export default function Achievements() {
  const achievements = [
    {
      icon: FiAward,
      title: 'Bruh Ethiopia 2025',
      description: 'Winner of the Innovative Idea Competition',
      stat: '🏆 1st Place',
    },
    {
      icon: FiCode,
      title: 'Addiscoder 2025',
      description: 'Alumni - Intensive coding program',
      stat: '✨ Graduate',
    },
    {
      icon: FiUsers,
      title: 'Community Impact',
      description: 'Building solutions for local communities',
      stat: '🌍 Active',
    },
    {
      icon: FiTrendingUp,
      title: 'Problem Solver',
      description: 'Passionate about real-world solutions',
      stat: '🎯 Focused',
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognized for innovation, community impact, and technical excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6 hover:border-primary-400 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
                <p className="text-primary-400 font-semibold text-sm">{achievement.stat}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-8 glass rounded-lg">
            <p className="text-4xl font-bold gradient-text mb-2">4+</p>
            <p className="text-gray-400">Udacity Certificates</p>
          </div>
          <div className="p-8 glass rounded-lg">
            <p className="text-4xl font-bold gradient-text mb-2">10+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="p-8 glass rounded-lg">
            <p className="text-4xl font-bold gradient-text mb-2">100%</p>
            <p className="text-gray-400">Community Focused</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

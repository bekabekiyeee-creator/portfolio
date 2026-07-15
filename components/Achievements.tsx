import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiZap } from 'react-icons/fi'

export default function Achievements() {
  const achievements = [
    {
      icon: FiAward,
      title: 'Bruh Ethiopia Innovation Winner',
      description: 'Winner of the Bruh Ethiopia 2025 Innovative Idea Competition, recognized for creative problem-solving and impact.',
      year: '2025',
    },
    {
      icon: FiTrendingUp,
      title: 'Addiscoder 2025 Alumni',
      description: 'Completed comprehensive coding training program with focus on competitive programming and software development.',
      year: '2025',
    },
    {
      icon: FiZap,
      title: 'Community Impact Projects',
      description: 'Developed and deployed malaria awareness applications and school management software helping local communities.',
      year: 'Ongoing',
    },
  ]

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Community Solutions', value: '3+' },
    { label: 'Udacity Certificates', value: '4' },
    { label: 'Years of Experience', value: '2+' },
  ]

  return (
    <section id="achievements" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
            Recognition of innovation, learning, and community impact
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-8 hover:border-primary-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-400 mb-4">{achievement.description}</p>
                <p className="text-primary-400 font-semibold">{achievement.year}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-900 from-opacity-40 to-primary-600 to-opacity-20 rounded-lg p-6 text-center border border-primary-500 border-opacity-30"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">{stat.value}</p>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

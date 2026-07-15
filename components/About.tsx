import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiSmartphone, FiTrendingUp } from 'react-icons/fi'

export default function About() {
  const skills = [
    {
      icon: FiCode,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: FiDatabase,
      title: 'Backend',
      skills: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'Firebase'],
    },
    {
      icon: FiSmartphone,
      title: 'Mobile',
      skills: ['Flutter', 'Android', 'Cross-platform', 'React Native'],
    },
    {
      icon: FiTrendingUp,
      title: 'Data & AI',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'TensorFlow'],
    },
  ]

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in web, mobile, and data science. Committed to building innovative solutions that make a real impact.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-8 mb-16"
        >
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm Beket Mitiku Amenu, a full-stack developer from Ethiopia with a passion for creating technology solutions that address real community needs. My journey in tech started with a curiosity about how things work, which evolved into a commitment to using software for social impact.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I've successfully completed multiple Udacity Nanodegree programs in Web Development, Android Development, AI & Machine Learning, and Data Science. I'm particularly proud of winning Bruh Ethiopia 2025 for an innovative idea and being part of the Addiscoder alumni community, which has shaped my approach to collaborative problem-solving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <motion.div
                key={skillGroup.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6 hover:border-primary-400 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{skillGroup.title}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6">🎓 Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-white">Web Development Nanodegree</p>
                <p className="text-gray-400 text-sm">Udacity</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-white">Android Developer Nanodegree</p>
                <p className="text-gray-400 text-sm">Udacity</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-white">AI & Machine Learning Nanodegree</p>
                <p className="text-gray-400 text-sm">Udacity</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <p className="font-semibold text-white">Data Science Nanodegree</p>
                <p className="text-gray-400 text-sm">Udacity</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

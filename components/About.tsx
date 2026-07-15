import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiSmartphone, FiBrain } from 'react-icons/fi'

export default function About() {
  const skills = [
    {
      icon: FiCode,
      name: 'Web Development',
      description: 'Next.js, React, TypeScript, Tailwind CSS',
    },
    {
      icon: FiDatabase,
      name: 'Backend',
      description: 'Python, Node.js, PostgreSQL, MongoDB',
    },
    {
      icon: FiSmartphone,
      name: 'Mobile',
      description: 'Android Development, Flutter',
    },
    {
      icon: FiBrain,
      name: 'AI & ML',
      description: 'Machine Learning, Data Science, TensorFlow',
    },
  ]

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
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
            Intermediate Python programmer with a passion for creating meaningful solutions. Winner of Bruh Ethiopia 2025 Innovative Idea Competition.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated developer and innovator passionate about leveraging technology to solve real-world problems. With a strong foundation in Python programming and experience across multiple domains, I create applications that make a tangible difference in communities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As an Addiscoder 2025 alumni and winner of the Bruh Ethiopia Innovative Idea Competition, I've developed solutions ranging from health-focused applications to education software. My work focuses on practical, community-oriented projects that address local challenges.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary-400">Key Highlights:</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Intermediate Python Programmer
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Addiscoder 2025 Alumni
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Bruh Ethiopia Innovation Competition Winner
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Community-focused Developer
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-6 hover:bg-opacity-10 transition-all duration-300 hover:border-primary-400"
                >
                  <Icon className="w-8 h-8 text-primary-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Web Development', 'AI & Machine Learning', 'Android Developer', 'Data Science'].map((cert) => (
              <div
                key={cert}
                className="bg-primary-900 bg-opacity-20 border border-primary-500 border-opacity-30 rounded-lg p-4 text-center hover:border-opacity-100 transition-all duration-300"
              >
                <p className="text-primary-400 font-semibold">{cert}</p>
                <p className="text-gray-500 text-sm mt-2">Udacity Certificate</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

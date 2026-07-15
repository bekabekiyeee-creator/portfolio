import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Malaria Awareness App',
      description: 'Community-focused mobile application for malaria prevention education and awareness.',
      tech: ['Python', 'Flutter', 'Firebase'],
      github: 'https://github.com/bekabekiyeee-creator',
      demo: '#',
      image: 'Malaria App',
    },
    {
      title: 'School Management System',
      description: 'Comprehensive software solution for local schools to manage student records, attendance, and grades.',
      tech: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/bekabekiyeee-creator',
      demo: '#',
      image: 'School Software',
    },
    {
      title: 'Community Utility App',
      description: 'Multi-purpose application helping local communities with various daily services and information.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/bekabekiyeee-creator',
      demo: '#',
      image: 'Utility App',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing community development data.',
      tech: ['Python', 'React', 'Data Science'],
      github: 'https://github.com/bekabekiyeee-creator',
      demo: '#',
      image: 'Analytics',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions making a difference in communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-lg overflow-hidden hover:border-primary-400 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-primary-900 from-opacity-40 to-primary-600 to-opacity-20 flex items-center justify-center">
                <FiCode className="w-12 h-12 text-primary-400 opacity-50" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary-900 bg-opacity-30 text-primary-300 rounded-full border border-primary-500 border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <FiExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

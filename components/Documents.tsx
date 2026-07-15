import { motion } from 'framer-motion'
import { FiFileText, FiDownload, FiAward } from 'react-icons/fi'

export default function Documents() {
  const documents = [
    {
      title: 'Resume / CV',
      description: 'Complete resume with education, experience, and skills',
      icon: FiFileText,
      downloadLink: '/resume.pdf',
    },
    {
      title: 'Web Development Certificate',
      description: 'Udacity Web Development Nanodegree',
      icon: FiAward,
      downloadLink: '/certs/web-dev.pdf',
    },
    {
      title: 'AI & Machine Learning Certificate',
      description: 'Udacity AI & ML Nanodegree',
      icon: FiAward,
      downloadLink: '/certs/ai-ml.pdf',
    },
    {
      title: 'Android Developer Certificate',
      description: 'Udacity Android Developer Nanodegree',
      icon: FiAward,
      downloadLink: '/certs/android.pdf',
    },
    {
      title: 'Data Science Certificate',
      description: 'Udacity Data Science Nanodegree',
      icon: FiAward,
      downloadLink: '/certs/data-science.pdf',
    },
  ]

  return (
    <section id="documents" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
            <span className="gradient-text">Documents & Credentials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Resume, certificates, and credentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon
            return (
              <motion.a
                key={doc.title}
                href={doc.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6 hover:border-primary-400 transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{doc.description}</p>
                <div className="flex items-center gap-2 text-primary-400 group-hover:gap-3 transition-all">
                  <FiDownload size={18} />
                  <span className="text-sm font-semibold">Download</span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary-900 bg-opacity-20 border border-primary-500 border-opacity-30 rounded-lg text-center"
        >
          <p className="text-gray-300">
            📝 <span className="text-primary-400 font-semibold">Note:</span> All documents are shared with proper permissions. Certificate verification available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

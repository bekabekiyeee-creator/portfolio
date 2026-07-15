import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Send via Formspree
      await axios.post('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })

      // Send to Telegram Bot
      const telegramMessage = `New Portfolio Contact:\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
      
      await axios.post(
        `https://api.telegram.org/botYOUR_TELEGRAM_BOT_TOKEN/sendMessage`,
        {
          chat_id: 'YOUR_TELEGRAM_CHAT_ID',
          text: telegramMessage,
        }
      ).catch(() => {
        // Telegram is optional, don't fail if it doesn't work
      })

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <a href="mailto:bekiakundi5@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                    bekiakundi5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+251 XXX XXX XXX</p>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/bekabekiyeee-creator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-900 bg-opacity-30 border border-primary-500 border-opacity-30 rounded-lg flex items-center justify-center hover:border-primary-400 hover:bg-primary-900 hover:bg-opacity-50 transition-all duration-300"
                  >
                    <FiGithub className="w-6 h-6 text-primary-400" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-900 bg-opacity-30 border border-primary-500 border-opacity-30 rounded-lg flex items-center justify-center hover:border-primary-400 hover:bg-primary-900 hover:bg-opacity-50 transition-all duration-300"
                  >
                    <FiLinkedin className="w-6 h-6 text-primary-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-primary-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-800 border border-primary-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-800 border border-primary-500 border-opacity-30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {error && (
                <div className="p-3 bg-red-900 bg-opacity-30 border border-red-500 border-opacity-50 rounded-lg text-red-300 text-sm">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="p-3 bg-green-900 bg-opacity-30 border border-green-500 border-opacity-50 rounded-lg text-green-300 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-primary-900 border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <span className="text-white font-bold">Beket</span>
            </div>
            <p className="text-gray-400 text-sm">
              Full-stack developer passionate about creating impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/bekabekiyeee-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900 bg-opacity-30 border border-primary-500 border-opacity-30 rounded-lg flex items-center justify-center hover:border-primary-400 transition-all"
              >
                <FiGithub className="w-5 h-5 text-primary-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900 bg-opacity-30 border border-primary-500 border-opacity-30 rounded-lg flex items-center justify-center hover:border-primary-400 transition-all"
              >
                <FiLinkedin className="w-5 h-5 text-primary-400" />
              </a>
              <a
                href="mailto:bekiakundi5@gmail.com"
                className="w-10 h-10 bg-primary-900 bg-opacity-30 border border-primary-500 border-opacity-30 rounded-lg flex items-center justify-center hover:border-primary-400 transition-all"
              >
                <FiMail className="w-5 h-5 text-primary-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-900 border-opacity-20 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {currentYear} Beket Mitiku Amenu. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="w-4 h-4 text-primary-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

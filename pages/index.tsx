import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Documents from '@/components/Documents'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-dark-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Documents />
      <Contact />
      <Footer />
    </main>
  )
}

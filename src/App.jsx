import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
import Contact from './components/Contact'
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  /* Track which section is in view using IntersectionObserver */
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'work', 'contact']
    const observers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/5 bg-slate-950 text-slate-400">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-blue-500/30">
                <Sparkles size={15} className="text-white" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Sami<span className="text-white/40">.</span>
              </span>
            </div>

            <p className="order-last text-xs text-slate-500 sm:order-none sm:text-sm">
              © {new Date().getFullYear()} Sami Khan. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Sami-khan222/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white hover:text-slate-950"
              >
                <Github size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/sami-khana8b591292"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white hover:text-slate-950"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:sami99khan99sami99@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white hover:text-slate-950"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
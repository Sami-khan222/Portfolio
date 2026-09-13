import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  /* Smooth scroll to section + update active state */
  const handleNav = (id) => {
    setActiveSection(id)
    setIsOpen(false)

    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Light glass bar */}
          <nav
            className={`relative mt-3 flex items-center justify-between overflow-hidden rounded-2xl border px-3 transition-all duration-500 sm:px-4 ${
              scrolled
                ? 'h-14 border-slate-200/80 bg-white/70 shadow-[0_8px_32px_rgba(15,23,42,0.08)]'
                : 'h-16 border-white/40 bg-white/40 shadow-[0_8px_32px_rgba(15,23,42,0.04)]'
            }`}
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {/* Top highlight */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            {/* Soft inner shine */}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />

            {/* Aurora tint */}
            <span className="pointer-events-none absolute -left-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-400/15 blur-3xl" />
            <span className="pointer-events-none absolute -right-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />

            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="group relative flex items-center gap-2.5 rounded-xl px-2 py-1.5"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105">
                <Sparkles size={15} className="text-white" />
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-slate-900">
                Sami
                <span className="text-slate-400">.</span>
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-1.5">
                {navLinks.map((link) => {
                  const active = activeSection === link.id
                  return (
                    <li key={link.id}>
                      <button
                        onClick={() => handleNav(link.id)}
                        className={`relative rounded-xl px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                          active
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                            : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-900'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('contact')
                }}
                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-xl bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/25"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Let's Talk</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:bg-slate-50 md:hidden"
            >
              <span className="relative h-5 w-5">
                <Menu
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-x-3 top-24 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-2xl shadow-slate-900/10 transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          }}
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
          <span className="pointer-events-none absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-fuchsia-400/15 blur-3xl" />

          <div className="relative p-3">
            <ul className="space-y-1">
              {navLinks.map((link, i) => {
                const active = activeSection === link.id
                return (
                  <li
                    key={link.id}
                    style={{
                      transitionDelay: isOpen ? `${i * 40}ms` : '0ms',
                    }}
                    className={`transform transition-all duration-300 ${
                      isOpen
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-2 opacity-0'
                    }`}
                  >
                    <button
                      onClick={() => handleNav(link.id)}
                      className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-[15px] font-semibold transition-all duration-200 ${
                        active
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'text-slate-700 hover:bg-slate-900/5 hover:text-slate-900'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            active
                              ? 'bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]'
                              : 'bg-slate-400 group-hover:bg-slate-600'
                          }`}
                        />
                        {link.label}
                      </span>
                      <span
                        className={`font-mono text-[10px] transition-colors ${
                          active ? 'text-white/80' : 'text-slate-400'
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-2 border-t border-slate-200/80 p-1 pt-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('contact')
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-blue-600"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
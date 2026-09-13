import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react'

const Home = () => {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-white">
      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(203 213 225 / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      {/* Soft aurora glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[26rem] w-[26rem] rounded-full bg-indigo-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-200/30 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center gap-14 px-4 py-24 sm:px-6 md:flex-row md:gap-10 md:py-28 lg:px-8">
        {/* Left */}
        <div className="w-full min-w-0 md:w-[55%]">
          {/* Availability pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
            <span className="mx-1 h-3 w-px bg-slate-200" />
            <Sparkles size={12} className="text-blue-600" />
            <span className="text-blue-600">2025</span>
          </div>

          <h1 className="text-[2.25rem] font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-[4rem]">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                Sami Khan
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full text-blue-400/60 sm:-bottom-3"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 120 3 180 6C220 8 260 8 298 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <h2 className="text-base font-medium text-slate-800 sm:text-lg md:text-xl">
              Full Stack Developer
            </h2>
            <span className="h-4 w-px bg-slate-300" />
            <h2 className="text-base font-medium text-slate-500 sm:text-lg md:text-xl">
              UI/UX Designer
            </h2>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            I design and build beautiful, functional web applications with modern
            technologies — driven by clean code, responsive design, and thoughtful
            user experiences.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#Work"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/25"
            onClick={(e) => {
    e.preventDefault()
    const el = document.getElementById('work')
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }}>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">View My Work</span>
              <ArrowRight
                size={16}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Sami-khan-new-resume1 (5).pdf"
              download="Sami_CV.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:text-blue-700"
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </div>

          {/* Social */}
          <div className="mt-12 flex items-center gap-3">
            {[
              {
                href: 'https://github.com/Sami-khan222/',
                icon: <Github size={17} />,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/sami-khana8b591292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                icon: <Linkedin size={17} />,
                label: 'LinkedIn',
              },
              {
                href: 'mailto:sami99khan99sami99@gmail.com',
                icon: <Mail size={17} />,
                label: 'Email',
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-600/25"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="relative flex w-full min-w-0 justify-center md:w-[45%]">
          <div className="relative">
            {/* Halo */}
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-tr from-blue-300/40 via-indigo-300/30 to-fuchsia-300/30 blur-3xl" />

            {/* Rotating conic ring */}
            <div
              className="pointer-events-none absolute -inset-3 rounded-full opacity-80"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(96,165,250,0.9) 90deg, transparent 180deg, rgba(192,132,252,0.9) 270deg, transparent 360deg)',
                animation: 'spin 12s linear infinite',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
              }}
            />

            {/* Image with border ring */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem]">
              <img
                src="/image.jpg.jpeg"
                alt="Sami Khan"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Projects floating card */}
            <div className="absolute -right-3 bottom-12 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:block lg:-right-4 lg:bottom-16">
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Projects
              </p>
              <p className="text-lg font-semibold text-slate-900">9+</p>
            </div>

            {/* Status chip */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-lg">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to work
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default Home
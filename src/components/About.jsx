import { Code2, Palette, Smartphone, Zap, User, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: <Code2 size={18} />, title: 'Frontend', desc: 'React, Next.js' },
    { icon: <Zap size={18} />, title: 'Backend', desc: 'Node.js, Express.js' },
    { icon: <Smartphone size={18} />, title: 'Database', desc: 'MongoDB, MySQL' },
    { icon: <Palette size={18} />, title: 'DevOps', desc: 'Docker, Kubernetes, GitHub' },
  ]

  const proficiency = [
    { label: 'React / Next.js', value: 90 },
    { label: 'Node.js', value: 85 },
    { label: 'DevOps', value: 50 },
  ]

  const facts = [
    'Available for Full-Time',
    'Available for freelance projects',
    'Love working on innovative projects',
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(203 213 225 / 0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <User size={13} className="text-blue-600" />
            About Me
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            The person behind{' '}
            <span className="text-slate-400">the code</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            A passionate builder focused on crafting clean, performant, and
            user-first digital experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left — Who I Am */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-slate-900">
                Who I Am
              </h3>

              <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                <p>
                  I'm a passionate{' '}
                  <span className="font-medium text-slate-900">
                    Full Stack Developer
                  </span>{' '}
                  with over 6 months of experience creating digital solutions for
                  businesses. I specialize in modern web technologies and believe
                  in writing clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge
                  through blog posts and tutorials.
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white p-5 sm:p-6">
                <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
                  <Sparkles size={14} />
                  Quick Facts
                </h4>
                <ul className="space-y-3">
                  {facts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Proficiency bars */}
            <div className="mt-6 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 text-lg font-semibold tracking-tight text-slate-900">
                Proficiency
              </h3>

              <div className="space-y-5">
                {proficiency.map((item, i) => (
                  <div key={i}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                      <span className="text-xs font-semibold text-blue-600">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Skills */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="mb-6 flex items-center gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  My Skills
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 sm:p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                      {skill.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {skill.title}
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Availability card — dark, aurora */}
              <div className="relative mt-6 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white">
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    Available
                  </div>

                  <h4 className="mb-1.5 text-base font-semibold">
                    Let's work together
                  </h4>
                  <p className="mb-5 text-xs leading-relaxed text-slate-400">
                    Open to full-time roles and freelance collaborations.
                  </p>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.5)]"
                  >
                    Get in touch
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
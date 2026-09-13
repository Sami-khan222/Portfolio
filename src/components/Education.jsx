import { GraduationCap, Award, Calendar, School, BadgeCheck, TrendingUp } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Invertis University',
      duration: '2023 - 2026',
      description: 'Focus on Full Stack Development and Software Architecture.',
      meta: 'GPA: ....',
      icon: <Award size={18} />,
    },
    {
      degree: 'Intermediate',
      institution: 'Islamia Inter College',
      duration: '2022 - 2023',
      description: 'Completed higher secondary education with a focus on science and mathematics.',
      meta: 'Percentage: 68%',
      icon: <School size={18} />,
    },
    {
      degree: 'High School',
      institution: 'Islamia Inter College',
      duration: '2020 - 2021',
      description: 'Foundation studies with strong academic performance.',
      meta: 'Percentage: 79%',
      icon: <School size={18} />,
    },
  ]

  const certifications = [
    'EduSkill Internship Certificate',
    'CodeAlpha Frontend Internship Certificate',
    'Advanced Diploma In Computer Application (ADCA)',
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
            <GraduationCap size={13} className="text-blue-600" />
            Learning & Growth
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            Education &{' '}
            <span className="text-slate-400">Certifications</span>
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            A foundation built on continuous learning, curiosity, and hands-on
            experience with modern technologies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Timeline
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon badge */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                      {edu.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h4 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                          <Calendar size={11} />
                          {edu.duration}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-blue-600">
                        {edu.institution}
                      </p>

                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {edu.description}
                      </p>

                      {edu.meta && (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-2.5 py-1 text-[11px] font-medium text-white">
                          {edu.meta}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications panel */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Certifications
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
            </div>

            <div className="sticky top-24 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <ul className="space-y-2.5">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-slate-50"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <span className="text-sm font-medium leading-snug text-slate-700 transition-colors group-hover:text-slate-900">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Continuous Learning — dark aurora card */}
              <div className="relative mt-6 overflow-hidden rounded-2xl bg-slate-950 p-5 text-white">
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingUp size={16} className="text-blue-400" />
                    <h4 className="text-sm font-semibold">Continuous Learning</h4>
                  </div>

                  <p className="mb-5 text-xs leading-relaxed text-slate-400">
                    I regularly take online courses and workshops to stay updated
                    with the latest technologies and best practices.
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    <span>Progress</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-700"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
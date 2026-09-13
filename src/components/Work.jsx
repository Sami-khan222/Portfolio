import { ExternalLink, Github, FolderGit2, ArrowUpRight } from 'lucide-react'

const Work = () => {
  const projects = [
    {
      title: 'Job-Portal Website',
      description: 'Build a full-stack job portal where employers can post jobs and job seekers can search/filter listings, upload resumes, and apply directly through the platform.',
      tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
      image: '/job-portal.png',
      github: 'https://github.com/Sami-khan222/job-portal.git',
      live: 'https://job-portal-1-ivl4.onrender.com/',
      featured: true,
    },
    {
      title: 'AI Marketing Assistant',
      description: 'Marketing Assistant app analyzes products using Google Gemini AI to generate Instagram captions, ads, hooks, hashtags.',
      tags: ['React + Vite', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API'],
      image: '/AI-marketing-assistant.png',
      github: 'https://github.com/Sami-khan222/marketing-assistant.git',
      live: '#',
      featured: true,
    },
    {
      title: 'Coding Learning Platform',
      description: 'Built a full-stack MERN application with JWT authentication, Gemini AI coding tutor, quizzes, certificates, and personalized learning paths for Python, JavaScript, Java, and C++.',
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'YouTube Data V3 API', 'Judge0 API', 'Gemini API'],
      image: '/CodeLearn.png',
      github: 'https://github.com/Sami-khan222/Coding-Learning-Platform.git',
      live: 'https://coding-learning-platform-1.onrender.com/',
    },
    {
      title: 'AI Resume Screener',
      description: 'Created an AI Resume Screener that evaluates resumes against job descriptions using intelligent skill and keyword matching. Generates candidate scores and screening insights to assist recruiters in making faster hiring decisions.',
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'Gemini API'],
      image: '/AI-resume-screener.png',
      github: 'https://github.com/Sami-khan222/AI-Resume-Screener.git',
      live: 'https://ai-resume-screener-1-ygyd.onrender.com/',
    },
    {
      title: 'Landing Page',
      description: 'Modern and responsive home page redesign for Tcongs Infotech, built from scratch using React, Tailwind CSS, Framer Motion, and Swiper.js with a premium UI and smooth animations.',
      tags: ['React 18 + Vite', 'Tailwind CSS', 'Framer Motion', 'React Icons', 'Swiper.js'],
      image: '/tcongs.png',
      github: 'https://github.com/Sami-khan222/Tcongs-Landing-page.git',
      live: 'https://tcongs-landing-page.vercel.app/',
    },
    {
      title: 'Task Management System',
      description: 'A full-stack task and project management system built for the AbleSpace Technical Assessment using Next.js, NestJS, TypeScript, Tailwind CSS, and MongoDB Atlas, featuring task/project management, subtasks, comments, authentication, themes, and responsive UI.',
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'NestJS', 'MongoDB Atlas + Mongoose'],
      image: '/Task.png',
      github: 'https://github.com/Sami-khan222/task-management-system.git',
      live: 'https://task-management-system-qs60.onrender.com/login',
    },
    {
      title: 'Mini Instagram Clone',
      description: 'PixGram is a full-stack Instagram-inspired social media app built with the MERN stack, featuring JWT authentication, photo sharing, likes, comments, follow system, user search, and real-time chat using Socket.IO.',
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'Socket.IO'],
      image: '/Pixgram.png',
      github: 'https://github.com/Sami-khan222/Instagram-Clone.git',
      live: '#',
    },
    {
      title: 'Real-Time Chat Application',
      description: 'ChatWave is a real-time full-stack chat application built with React, Node.js, Express, Socket.IO, and MongoDB, featuring live messaging, typing indicators, online user tracking, persistent chat history, and a responsive UI.',
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'Socket.IO'],
      image: '/Real.png',
      github: 'https://github.com/Sami-khan222/Real.git',
      live: 'https://real-2l9c.onrender.com/login',
    },
    {
      title: 'MarketFlow',
      description: 'MarketFlow AI is an AI-powered MERN marketing automation and CRM platform. It captures and qualifies leads, assigns them to team members, and automates follow-ups. It also provides campaign analytics and workflow tracking for architecture and interior studios.',
      tags: ['React.js', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB'],
      image: '/MarketFlow.png',
      github: 'https://github.com/Sami-khan222/AI-Marketflow.git',
      live: 'https://ai-marketflow-3h4a.onrender.com/',
    },
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
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <FolderGit2 size={13} className="text-blue-600" />
              Portfolio
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
              Selected <span className="text-slate-400">Work</span>
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
              A collection of full-stack projects spanning AI, real-time systems,
              and modern web applications.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {projects.length} Projects
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {projects.map((project, index) => {
            const isFeatured = project.featured
            const spanClass = isFeatured ? 'lg:col-span-3' : 'lg:col-span-2'
            const tagLimit = isFeatured ? 6 : 4

            return (
              <article
                key={index}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/5 ${spanClass}`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 ${
                    isFeatured ? 'h-56 sm:h-64' : 'h-48'
                  }`}
                >
                  {/* Fallback title (visible if image fails) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="select-none px-4 text-center text-sm font-medium text-slate-400">
                      {project.title}
                    </span>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="relative h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0'
                    }}
                  />

                  {/* Hover gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Quick open */}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="absolute right-3 top-3 flex h-9 w-9 translate-y-[-8px] items-center justify-center rounded-full bg-white/95 text-slate-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {/* Featured badge */}
                  {isFeatured && (
                    <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, tagLimit).map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-slate-300 group-hover:bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > tagLimit && (
                      <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                        +{project.tags.length - tagLimit}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      <Github size={14} />
                      Code
                    </a>

                    {project.live && project.live !== '#' ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-blue-600"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-200 px-3 py-2 text-xs font-semibold text-slate-400">
                        Soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work
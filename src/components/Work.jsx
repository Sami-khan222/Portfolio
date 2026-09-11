import { ExternalLink, Github, Globe } from 'lucide-react'

const Work = () => {
  const projects = [
    {
      title: 'Job-Portal Website',
      description: 'Build a full-stack job portal where employers can post jobs and job seekers can search/filter listings, upload resumes, and apply directly through the platform.',
      tags: ['React.js', 'Express.js','Node.js', 'MongoDB'],
      image: '/job-portal.png',
      github: 'https://github.com/Sami-khan222/job-portal.git',
      live: 'https://job-portal-1-ivl4.onrender.com/'
    },
    {
      title: 'AI Marketing Assistant',
      description: ' Marketing Assistant app analyzes products using Google Gemini AI to generate Instagram captions, ads, hooks, hashtags.',
      tags: ['React + Vite', ' Tailwind CSS ','JavaScript','Node.js','Express.js ',' MongoDB', ' Gemini API',],
      image: '/AI-marketing-assistant.png',
      github: 'https://github.com/Sami-khan222/marketing-assistant.git',
      live: '#'
    },
    {
      title: 'Coding Learning Platform',
      description: 'Built a full-stack MERN application with JWT authentication, Gemini AI coding tutor, quizzes, certificates, and personalized learning paths for Python, JavaScript, Java, and C++.',
      tags: ['React.js', 'Tailwind CSS','Express.js','Node.js','YouTube Data V3 API','Judge0 API', 'Gemini API'],
      image: '/CodeLearn.png',
      github: 'https://github.com/Sami-khan222/Coding-Learning-Platform.git',
      live: 'https://coding-learning-platform-1.onrender.com/'
    },
    {
      title: 'AI Resume Screener',
      description: 'Created an AI Resume Screener that evaluates resumes against job descriptions using intelligent skill and keyword matching.Generates candidate scores and screening insights to assist recruiters in making faster hiring decisions.',
      tags: ['React.js', 'Tailwind CSS','Express.js','Node.js','Gemini API'],
      image: '/AI-resume-screener.png',
      github: 'https://github.com/Sami-khan222/AI-Resume-Screener.git',
      live: 'https://ai-resume-screener-1-ygyd.onrender.com/'
    },
      {
      title: 'Landing Page',
      description: 'Modern and responsive home page redesign for Tcongs Infotech, built from scratch using React, Tailwind CSS, Framer Motion, and Swiper.js with a premium UI and smooth animations.',
      tags: ['React 18 + Vite', 'Tailwind CSS',' Framer Motion',' React Icons', 'Swiper.js.'],
      image: '/tcongs.png',
      github: 'https://github.com/Sami-khan222/Tcongs-Landing-page.git',
      live: 'https://tcongs-landing-page.vercel.app/'
    },
      {
      title: 'Task Management System',
      description: 'A full-stack task and project management system built for the AbleSpace Technical Assessment using Next.js, NestJS, TypeScript, Tailwind CSS, and MongoDB Atlas, featuring task/project management, subtasks, comments, authentication, themes, and responsive UI.',
      tags: ['Next.js ', 'Tailwind CSS',' TypeScript',' NestJS', 'MongoDB Atlas + Mongoose'],
      image: '/Task.png',
      github: 'https://github.com/Sami-khan222/task-management-system.git',
      live: 'https://task-management-system-qs60.onrender.com/login'
    },
    {
      title: 'Mini Instagram Clone',
      description: 'PixGram is a full-stack Instagram-inspired social media app built with the MERN stack, featuring JWT authentication, photo sharing, likes, comments, follow system, user search, and real-time chat using Socket.IO.',
      tags: ['React.js', 'Tailwind CSS','Express.js','Node.js','Socket.IO'],
      image: '/Pixgram.png',
      github: 'https://github.com/Sami-khan222/Instagram-Clone.git',
      live: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'ChatWave is a real-time full-stack chat application built with React, Node.js, Express, Socket.IO, and MongoDB, featuring live messaging, typing indicators, online user tracking, persistent chat history, and a responsive UI.',
      tags: ['React.js', 'Tailwind CSS','Express.js','Node.js','Socket.IO'],
      image: '/Real.png',
      github: 'https://github.com/Sami-khan222/Real.git',
      live: 'https://real-2l9c.onrender.com/login'
    },
     {
      title: 'MarketFlow',
      description: 'MarketFlow AI is an AI-powered MERN marketing automation and CRM platform.It captures and qualifies leads, assigns them to team members, and automates follow-ups.It also provides campaign analytics and workflow tracking for architecture and interior studios.',
      tags: ['React.js', 'Tailwind CSS','Express.js','Node.js','MongoDB'],
      image: '/MarketFlow.png',
      github: 'https://github.com/Sami-khan222/AI-Marketflow.git',
      live: 'https://ai-marketflow-3h4a.onrender.com/'
    }
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Work</h2>
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <div className="w-full h-full  flex items-center justify-center">
                    <span className="text-white text-3xl"><img src={project.image} alt="regret" /></span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Work Experience */}
      { /* <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Senior Frontend Developer</h4>
                  <p className="text-blue-600 font-medium">TechCorp Inc.</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  2025 - Present
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Lead development of customer-facing web applications using React and TypeScript.
                Improved application performance by 40% through code optimization and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Led a team of 5 developers in building scalable applications
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Implemented CI/CD pipelines reducing deployment time by 60%
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Full Stack Developer</h4>
                  <p className="text-blue-600 font-medium">StartupXYZ</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  2024 - 2025
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Developed and maintained multiple web applications using MERN stack.
                Collaborated with designers to implement responsive UI components.
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  )
}

export default Work
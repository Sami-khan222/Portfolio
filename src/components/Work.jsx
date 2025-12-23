import { ExternalLink, Github, Globe } from 'lucide-react'

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tags: ['Next.js', 'JavaScript', 'MySQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with forecasts and location-based services.',
      tags: ['React.js', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400',
      github: '#',
      live: '#'
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
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-3xl">📱</span>
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
        <div>
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
        </div>
      </div>
    </section>
  )
}

export default Work
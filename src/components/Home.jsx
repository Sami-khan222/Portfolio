import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Sami Khan</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
          Full Stack Developer & UI/UX Designer
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg">
          I create beautiful, functional web applications with modern technologies.
          Passionate about clean code, responsive design, and great user experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center gap-2">
            View My Work
            <ArrowRight size={20} />
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
            Download CV
          </button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 mt-8">
          <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl text-gray-500"><img src='/image.jpg.jpeg'></img></span>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">6</div>
              <div className="text-sm text-gray-600">Months Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
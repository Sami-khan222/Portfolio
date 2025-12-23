import { Code2, Palette, Smartphone, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    { icon: <Code2 />, title: 'Frontend', desc: 'React, Next.js' },
     { icon: <Zap />, title: 'Backend', desc: 'Node.js, Express.js' },
     { icon: <Smartphone />, title: 'Database', desc: 'MongoDb, MySQL' },
    { icon: <Palette />, title: 'DevOps', desc: 'Docker, Kubernets, GitHub' }
    
   
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with over 6 Months of experience creating 
              digital solutions for businesses. I specialize in modern web technologies and 
              believe in writing clean, efficient code.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge through blog posts and tutorials.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-800 mb-2">Quick Facts</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Based in San Francisco, CA
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Available for freelance projects
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Love working on innovative projects
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
                >
                  <div className="text-blue-600 mb-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{skill.title}</h4>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Progress bars */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">React/Next.js</span>
                  <span className="text-blue-600 font-medium">90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Node.js</span>
                  <span className="text-blue-600 font-medium">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">DevOps</span>
                  <span className="text-blue-600 font-medium">50%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '50%' }}></div>
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


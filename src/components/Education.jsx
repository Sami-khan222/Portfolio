import { GraduationCap, Award, Calendar,School } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Invertis University',
      duration: '2023 - 2026',
      description: 'Focus on Full Stack Development and Software Architecture. GPA: ....',
      icon: <Award />
    },
    {
       degree: 'Intermediate',
      institution: 'Islamia Inter College',
      duration: '2022 - 2023',
      description: 'Focus on Marks. Percentage: 68%',
      icon:<School />
    },
     {
       degree: 'HighSchool',
      institution: 'Islamia Inter College',
      duration: '2021 - 2022',
      description: 'Focus on Marks. Percentage: 79%',
      icon: <School />
    }

  ]

  const certifications = [
    'EduSkill Intership Certificate',
    'CodeAlpha Frontend Internship Certificate',
    'React Advanced Certification',
    'UX Design Specialization'
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Education & Certifications</h2>
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {edu.icon}
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">Continuous Learning</h4>
                <p className="text-gray-600 text-sm mb-4">
                  I regularly participate in online courses and workshops to stay updated 
                  with the latest technologies and best practices.
                </p>
                <div className="flex items-center text-blue-600">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="ml-4 text-sm font-medium">Current: 75%</span>
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
import { useState } from 'react'
import { Mail, Phone, MapPin, Send,Linkedin,Github,Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center sm:text-left">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mb-6 sm:mb-8 mx-auto sm:mx-0"></div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form */}
          <div className="w-full overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="w-full">
                  <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
              
              <div className="w-full">
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="w-full">
                <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Send Message
                <Send size={18} className="sm:w-5" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="w-full overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail size={18} className="sm:w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base truncate">sami99khan99sami99@gmail.com</p>
                  <p className="text-gray-600 text-sm sm:text-base truncate">sami099khan099@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Phone size={18} className="sm:w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+91 879*****19</p>
                  <p className="text-gray-600 text-sm sm:text-base">Available Mon-Fri, 9AM-6PM </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MapPin size={18} className="sm:w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Shahjahanpur, Utter perdesh</p>
                  <p className="text-gray-600 text-sm sm:text-base">INDIA</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Connect with me</h4>
              <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4">
                <a href="#" className="flex-1 min-w-[calc(33.333%-0.75rem)] sm:min-w-0 bg-white p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-1 sm:mb-2 text-lg">💼</div>
                  <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex-1 min-w-[calc(33.333%-0.75rem)] sm:min-w-0 bg-white p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-1 sm:mb-2 text-lg">🐙</div>
                  <span className="text-xs sm:text-sm font-medium">GitHub</span>
                </a>
                <a href="#" className="flex-1 min-w-[calc(33.333%-0.75rem)] sm:min-w-0 bg-white p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-1 sm:mb-2 text-lg"><Twitter/></div>
                  <span className="text-xs sm:text-sm font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
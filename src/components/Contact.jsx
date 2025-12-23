import { useState } from 'react'
import { Mail, Phone, MapPin, Send,Instagram,Linkedin ,Github,Twitter} from 'lucide-react'

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
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">sami99khan99sami99@gmail.com</p>
                  <p className="text-gray-600">sami099khan099@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 879*****19</p>
                  <p className="text-gray-600">Available Mon-Fri, 9AM-6PM </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Shahjahanpur, Utter perdesh</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a href="#" className="flex-1 bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-2 pl-11" ><Linkedin /></div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex-1 bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-2 pl-11"><Github /></div>
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href="#" className="flex-1 bg-white p-4 rounded-lg text-center hover:shadow-md transition duration-300">
                  <div className="text-blue-600 mb-2 pl-11"><Twitter /></div>
                  <span className="text-sm font-medium">Twitter</span>
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

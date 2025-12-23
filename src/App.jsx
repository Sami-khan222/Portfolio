import { useState } from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'education':
        return <Education />
      case 'work':
        return <Work />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 px-4 md:px-8 lg:px-16">
        {renderSection()}
      </main>
      <footer className="py-6 text-center text-gray-600 mt-12 border-t border-gray-200">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
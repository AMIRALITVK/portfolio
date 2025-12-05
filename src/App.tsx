import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Contact from './components/Contact'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
    </div>
  )
}

export default App

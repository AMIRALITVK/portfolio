import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

interface NavbarProps {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#stats', label: 'Stats' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${theme}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" aria-label="Go to homepage">
          <span className="brand-name">Amirali</span>
          <span className="brand-dot" aria-hidden="true"></span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`} id="navbar-menu">
          <ul className="navbar-nav" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  className="navbar-link"
                  role="menuitem"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li role="none">
              <button
                className="navbar-theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

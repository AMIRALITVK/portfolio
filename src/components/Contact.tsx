import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from 'react-icons/fa'

const Contact: React.FC = () => {
  const contactLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      href: 'https://github.com/amiralitvk',
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      href: 'https://www.linkedin.com/in/amirali-tavakoli-906a07201/',
      label: 'LinkedIn Profile',
    },
    {
      name: 'Telegram',
      icon: <FaTelegram size={24} />,
      href: 'https://t.me/Amirali_Tvk',
      label: 'Telegram Contact',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      href: 'mailto:amirtvk96@gmail.com',
      label: 'Send Email',
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-header fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </header>

        <div className="contact-grid fade-in">
          {contactLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label={link.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="contact-icon">{link.icon}</div>
              <span className="contact-name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Contact Me</h2>

      <div style={{ margin: '1rem 0', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="https://github.com/amiralitvk" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/amirali-tavakoli-906a07201/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:amirtvk96@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Send Message
        </button>
        {submitted && <p style={{ marginTop: '0.5rem', color: 'green' }}>Message sent!</p>}
      </form>
    </section>
  )
}

export default Contact

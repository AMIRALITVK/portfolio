import React from 'react'

interface NavbarProps {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#111',
      }}
    >
      <h2>Amirali</h2>
      <div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </nav>
  )
}

export default Navbar

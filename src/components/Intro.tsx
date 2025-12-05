import React from 'react'
import Typed from 'react-typed'

const Intro: React.FC = () => {
  return (
    <div>
      <h1>Hello, I'm Amirali 👋</h1>
      <Typed
        strings={[
          'Full-Stack Developer',
          'Open Source Enthusiast',
          'React & Node.js Expert',
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  )
}

export default Intro

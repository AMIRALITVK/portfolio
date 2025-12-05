import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>Hello, I'm Amirali 👋</h1>
      <ReactTyped
        strings={[
          'Backend & Software Developer',
          'Open Source Enthusiast',
          'Nodejs | Goland | Python | Dart',
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </section>
  );
};

export default Hero;

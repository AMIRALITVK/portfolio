import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <p className="hero-greeting fade-in">Hello, I'm</p>
            <h1 className="hero-name fade-in stagger-1">Amirali Tavakoli</h1>
            <div className="hero-titles fade-in stagger-2">
              <ReactTyped
                strings={[
                  'Backend & Software Developer',
                  'Open Source Enthusiast',
                  'Node.js | Go | Python | Dart',
                  'Building scalable systems',
                ]}
                typeSpeed={40}
                backSpeed={25}
                backDelay={1500}
                startDelay={500}
                loop
                className="typed-text"
              />
            </div>
            <p className="hero-description fade-in stagger-3">
              Passionate about building robust backend systems, clean architectures,
              and developer tools. I love solving complex problems with elegant code.
            </p>
            <div className="hero-actions fade-in stagger-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <FaExternalLinkAlt size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-visual slide-in-right">
            <div className="hero-card fade-in stagger-3">
              <div className="card-header">
                <div className="card-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="card-content">
                <pre className="code-snippet"><code>{`const developer = {
  name: "Amirali Tavakoli",
  role: "Backend Developer",
  stack: [
    "Node.js", "Go", "Python", "Dart"
  ],
  frameworks: [
    "NestJS", "Express", "Flutter"
  ],
  databases: [
    "PostgreSQL", "MongoDB", "Redis"
  ],
  tools: [
    "Docker", "Linux", "Git"
  ],
  currentlyLearning: "Distributed Systems"
};`}</code></pre>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator fade-in stagger-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
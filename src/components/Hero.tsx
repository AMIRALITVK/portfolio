import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';

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
            <div className="hero-social fade-in stagger-5">
              <a
                href="https://github.com/amiralitvk"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/amirali-tavakoli-906a07201/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:amirtvk96@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
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
            <div className="floating-elements">
              <div className="float-item float-1" style={{ '--i': '0' } as React.CSSProperties}>
                <FaNodeJs size={32} color="#68A063" />
              </div>
              <div className="float-item float-2" style={{ '--i': '1' } as React.CSSProperties}>
                <FaDocker size={32} color="#2496ED" />
              </div>
              <div className="float-item float-3" style={{ '--i': '2' } as React.CSSProperties}>
                <FaGitAlt size={32} color="#F1502F" />
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
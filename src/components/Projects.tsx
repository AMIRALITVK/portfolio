import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Nest Simple Auth Project',
    description: 'Authentication system built with NestJS',
    link: 'https://github.com/AMIRALITVK/simple-nest-auth',
  },
  {
    name: 'MacOs Dns Changer',
    description: 'DNS settings manager for macOS',
    link: 'https://github.com/AMIRALITVK/dns-setter-mac-os',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-header fade-in">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Open source projects I've built and contributed to
          </p>
        </header>

        <div className="projects-grid fade-in">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <FaExternalLinkAlt className="project-link-icon" size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

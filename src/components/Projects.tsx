import React from 'react';

interface Project {
  name: string;
  link: string;
}

const projects: Project[] = [
  { name: 'Nest Simple Auth Project', link: 'https://github.com/AMIRALITVK/simple-nest-auth' },
  { name: 'MacOs Dns Changer', link: 'https://github.com/AMIRALITVK/dns-setter-mac-os' },
];

const Projects: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', paddingBottom: '0.3rem', }}>
      <h2 >My Projects</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', padding: '1rem', border: '1px solid gray', borderRadius: '8px' }}
          >
            {p.name}
          </a>
        ))}
      </div>
    </div >
  );
};

export default Projects;

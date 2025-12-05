import React from 'react'

interface Project {
  name: string
  link: string
}

const projects: Project[] = [
  { name: 'Project A', link: 'https://github.com/amiralitvk/project-a' },
  { name: 'Project B', link: 'https://github.com/amiralitvk/project-b' },
  { name: 'Project C', link: 'https://github.com/amiralitvk/project-c' },
]

const Projects: React.FC = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>My Projects</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '1rem', border: '1px solid gray', borderRadius: '8px' }}
          >
            {p.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects

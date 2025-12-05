import React from 'react';
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaLinux, FaNodeJs } from 'react-icons/fa';
import { SiReact, SiTypescript, SiNestjs, SiMongodb, SiPostgresql, SiRedis, SiExpress, SiGo, SiPython, SiElectron, SiDart, SiFlutter } from 'react-icons/si';


const Skills: React.FC = () => {
  const skills = [
    // Langs
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
    { name: 'Go', icon: <SiGo color="#00ADD8" /> },
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'Dart', icon: <SiDart color="#0175C2" /> },

    // Backend
    { name: 'NestJS', icon: <SiNestjs color="#E0234E" /> },
    { name: 'Express', icon: <SiExpress color="#000000" /> },

    // Databases
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'Redis', icon: <SiRedis color="#DC382D" /> },

    // Tools / OS
    { name: 'Git', icon: <FaGitAlt color="#F1502F" /> },
    { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },

    // Application
    { name: 'Electron', icon: <SiElectron color="#47848F" /> },
    { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
  ];

  return (
    <section id="skills" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Skills</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginTop: '1rem',
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px',
            }}
          >
            <div style={{ fontSize: '3rem' }}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

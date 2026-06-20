import React from 'react';
import { FaNodeJs, FaGitAlt, FaLinux, FaDocker } from 'react-icons/fa';
import { SiGo, SiPython, SiDart, SiNestjs, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiElectron, SiFlutter } from 'react-icons/si';

interface SkillIconProps {
  size?: number;
  color?: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactElement<SkillIconProps>;
  skills: SkillItem[];
}

interface SkillItem {
  name: string;
  icon: React.ReactElement<SkillIconProps>;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: <FaNodeJs size={24} color="#68A063" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={28} />, color: '#68A063' },
      { name: 'Go', icon: <SiGo size={28} />, color: '#00ADD8' },
      { name: 'Python', icon: <SiPython size={28} />, color: '#3776AB' },
      { name: 'Dart', icon: <SiDart size={28} />, color: '#0175C2' },
    ],
  },
  {
    name: 'Backend',
    icon: <SiNestjs size={24} color="#E0234E" />,
    skills: [
      { name: 'NestJS', icon: <SiNestjs size={28} />, color: '#E0234E' },
      { name: 'Express', icon: <SiExpress size={28} />, color: '#000000' },
    ],
  },
  {
    name: 'Databases',
    icon: <SiMongodb size={24} color="#4DB33D" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb size={28} />, color: '#4DB33D' },
      { name: 'PostgreSQL', icon: <SiPostgresql size={28} />, color: '#336791' },
      { name: 'Redis', icon: <SiRedis size={28} />, color: '#DC382D' },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: <FaDocker size={24} color="#2496ED" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt size={28} />, color: '#F1502F' },
      { name: 'Linux', icon: <FaLinux size={28} />, color: '#FCC624' },
      { name: 'Docker', icon: <FaDocker size={28} />, color: '#2496ED' },
    ],
  },
  {
    name: 'App Development',
    icon: <SiFlutter size={24} color="#02569B" />,
    skills: [
      { name: 'Electron', icon: <SiElectron size={28} />, color: '#47848F' },
      { name: 'Flutter', icon: <SiFlutter size={28} />, color: '#02569B' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <header className="section-header fade-in">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build robust, scalable applications
          </p>
        </header>

        <div className="skills-grid" role="list">
          {skillCategories.map((category, catIndex) => (
            <article
              key={category.name}
              className="card skill-category fade-in"
              style={{ animationDelay: `${catIndex * 100}ms` }}
              role="listitem"
            >
               <div className="category-header">
                 <div
                   className="category-icon"
                   style={{ color: category.icon.props.color || 'inherit' }}
                 >
                   {category.icon}
                 </div>
                 <h3 className="category-name">{category.name}</h3>
               </div>
              <ul className="skill-list" role="list">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill.name}
                    className="skill-item fade-in"
                    style={{ animationDelay: `${catIndex * 100 + skillIndex * 50}ms` }}
                    role="listitem"
                  >
                    <span
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

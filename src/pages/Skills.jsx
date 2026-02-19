import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    backend: {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js', level: 90, icon: '▲' },
        { name: 'Express.js', level: 88, icon: '◆' },
        { name: 'MongoDB', level: 85, icon: '●' },
        { name: 'MySQL', level: 78, icon: '■' },
        { name: 'TypeScript', level: 82, icon: '◇' },
        { name: 'Redis', level: 75, icon: '⚡' },
        { name: 'Python', level: 70, icon: '▼' },
      ],
    },

    frontend: {
      title: 'FRONTEND',
      skills: [
        { name: 'React.js', level: 78, icon: '⚛' },
        { name: 'JavaScript (ES6+)', level: 85, icon: '◆' },
        { name: 'TypeScript', level: 80, icon: '▲' },
        { name: 'HTML', level: 90, icon: '●' },
        { name: 'CSS', level: 85, icon: '■' },
        { name: 'Tailwind CSS', level: 82, icon: '◇' },
        { name: 'Framer Motion', level: 70, icon: '⚡' },
      ],
    },

    tools: {
      title: 'TOOLS',
      skills: [
        { name: 'Git', level: 88, icon: '◆' },
        { name: 'GitHub', level: 85, icon: '▲' },
        { name: 'VS Code', level: 92, icon: '●' },
        { name: 'Linux', level: 80, icon: '■' },
        { name: 'Postman', level: 85, icon: '◇' },
      ],
    },
  };


  // const certifications = [
  //   { name: 'AWS Certified Developer', year: '2024' },
  //   { name: 'React Advanced Patterns', year: '2023' },
  //   { name: 'Web Performance Expert', year: '2023' },
  // ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <div className="section-number">03</div>
        <h2 className="section-title">
          <span className="title-main">EXPERTISE</span>
          <span className="title-sub">Technical Skills</span>
        </h2>
      </div>

      <div className="skills-container">
        <div className="skills-tabs">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`skill-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="tab-icon">
                {key === 'frontend' ? '◆' : key === 'backend' ? '▲' : '●'}
              </span>
              <span className="tab-title">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card"
                style={{ '--skill-index': index }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ '--skill-level': `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="progress-value">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-stats">
            <div className="stat-box" style={{ '--stat-index': 0 }}>
              <div className="stat-icon">◆</div>
              <div className="stat-value">17+</div>
              <div className="stat-label">Technologies Used</div>
            </div>
            <div className="stat-box" style={{ '--stat-index': 1 }}>
              <div className="stat-icon">▲</div>
              <div className="stat-value">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-box" style={{ '--stat-index': 2 }}>
              <div className="stat-icon">●</div>
              <div className="stat-value">Backend</div>
              <div className="stat-label">Primary Focus</div>
            </div>
          </div>
        </div>

        <h3 className="certifications-title">CURRENT FOCUS</h3>

        <div className="certifications-list">
          <div className="cert-item">
            <div className="cert-content">
              <span className="cert-name">Advanced Backend Architecture</span>
              <span className="cert-year">2025</span>
            </div>
          </div>

          <div className="cert-item">
            <div className="cert-content">
              <span className="cert-name">Authentication & API Security</span>
              <span className="cert-year">Ongoing</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
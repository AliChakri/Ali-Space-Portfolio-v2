import React, { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'FRONTEND',
      skills: [
        { name: 'React / Next.js', level: 95, icon: '⚛' },
        { name: 'TypeScript', level: 90, icon: '◆' },
        { name: 'Tailwind CSS', level: 95, icon: '▲' },
        { name: 'GSAP / Framer Motion', level: 85, icon: '●' },
        { name: 'Three.js / WebGL', level: 75, icon: '■' },
        { name: 'Redux / Zustand', level: 88, icon: '◇' },
      ],
    },
    backend: {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js / Express', level: 85, icon: '▼' },
        { name: 'MongoDB / PostgreSQL', level: 80, icon: '◆' },
        { name: 'REST / GraphQL APIs', level: 88, icon: '⚡' },
        { name: 'Firebase / Supabase', level: 82, icon: '●' },
        { name: 'Docker / CI/CD', level: 70, icon: '■' },
      ],
    },
    tools: {
      title: 'TOOLS & OTHERS',
      skills: [
        { name: 'Git / GitHub', level: 93, icon: '◇' },
        { name: 'Figma / Adobe XD', level: 88, icon: '▲' },
        { name: 'VS Code / Vim', level: 90, icon: '◆' },
        { name: 'Testing (Jest/Cypress)', level: 78, icon: '●' },
        { name: 'Performance Optimization', level: 85, icon: '⚡' },
      ],
    },
  };

  const certifications = [
    { name: 'AWS Certified Developer', year: '2024' },
    { name: 'React Advanced Patterns', year: '2023' },
    { name: 'Web Performance Expert', year: '2023' },
  ];

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
              <div className="stat-value">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-box" style={{ '--stat-index': 1 }}>
              <div className="stat-icon">▲</div>
              <div className="stat-value">5</div>
              <div className="stat-label">Years Coding</div>
            </div>
            <div className="stat-box" style={{ '--stat-index': 2 }}>
              <div className="stat-icon">●</div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3 className="certifications-title">CERTIFICATIONS</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cert-item"
                style={{ '--cert-index': index }}
              >
                <div className="cert-line"></div>
                <div className="cert-content">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
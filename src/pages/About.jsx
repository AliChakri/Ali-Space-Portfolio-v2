import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = {
    journey: {
      title: 'MY JOURNEY',
      content: [
        {
          year: '2023',
          role: 'Backend Development Foundations',
          description:
            'Started my software development journey by focusing on backend fundamentals, learning JavaScript, Node.js, Express, and basic database concepts with MongoDB.',
        },
        {
          year: '2024',
          role: 'Computer Science Student & Backend-Focused MERN Developer',
          description:
            'Began my computer science studies while deepening my backend expertise, building REST APIs, authentication systems, and working with databases, JWT, and server-side logic.',
        },
        {
          year: '2025',
          role: 'MERN Stack Developer (Backend-Oriented)',
          description:
            'Currently building full-stack MERN applications with a strong focus on backend architecture, security, scalability, and real-world system design.',
        },
      ],
    },

    philosophy: {
      title: 'PHILOSOPHY',
      content: [
        {
          principle: 'Problem Solving',
          description:
            'I approach development as a problem-solving process, focusing on clarity, structure, and long-term maintainability.',
        },
        {
          principle: 'Security & Performance',
          description:
            'Security, performance, and scalability are core concerns. A system should be safe, fast, and reliable by design.',
        },
        {
          principle: 'Continuous Learning',
          description:
            'As a computer science student, I constantly improve my understanding of algorithms, system design, and modern web technologies.',
        },
        {
          principle: 'Clean Code',
          description:
            'Readable, well-structured code matters. Clean code makes applications easier to scale, debug, and maintain.',
        },
      ],
    },

    interests: {
      title: 'INTERESTS',
      content: [
        { name: 'Full-Stack Development', icon: '◆' },
        { name: 'Backend Architecture', icon: '▲' },
        { name: 'Authentication & Security', icon: '●' },
        { name: 'System Design', icon: '■' },
        { name: 'Databases & APIs', icon: '◇' },
        { name: 'Open Source & Learning', icon: '▼' },
      ],
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <div className="section-number">01</div>
        <h2 className="section-title">
          <span className="title-main">ABOUT</span>
          <span className="title-sub">Who I Am</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-intro">
          <div className="intro-text">
            <h3 className="intro-heading">
              I'm a MERN stack developer and computer science student.
            </h3>

            <p className="intro-paragraph">
              I'm a computer science student with over 3 years of hands-on experience
              building full-stack web applications using the MERN stack (MongoDB,
              Express, React, and Node.js).
            </p>

            <p className="intro-paragraph">
              I focus on writing clean, maintainable code and building secure,
              scalable systems such as authentication workflows, REST APIs,
              dashboards, and real-world web products.
            </p>
          </div>

          <div className="intro-image">
            <div className="image-container">
              <div className="image-frame">
                <img 
                  src="/assets/profile-pic.jpg" 
                  alt="Profile" 
                  className="profile-image"
                />
                <div className="image-border"></div>
              </div>
              <div className="image-label">
                <span className="label-location">ALGERIA</span>
                <span className="label-separator">•</span>
                <span className="label-stack">MERN STACK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-tabs">
          <div className="tabs-navigation">
            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <span className="tab-number">0{Object.keys(tabs).indexOf(key) + 1}</span>
                <span className="tab-label">{tabs[key].title}</span>
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {activeTab === 'journey' && (
              <div className="journey-timeline">
                {tabs.journey.content.map((item, index) => (
                  <div key={index} className="timeline-item" style={{ '--item-index': index }}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h4 className="timeline-role">{item.role}</h4>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'philosophy' && (
              <div className="philosophy-grid">
                {tabs.philosophy.content.map((item, index) => (
                  <div key={index} className="philosophy-card" style={{ '--card-index': index }}>
                    <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                    <h4 className="card-principle">{item.principle}</h4>
                    <p className="card-description">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="interests-grid">
                {tabs.interests.content.map((item, index) => (
                  <div key={index} className="interest-tag" style={{ '--tag-index': index }}>
                    <span className="interest-icon">{item.icon}</span>
                    <span className="interest-name">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
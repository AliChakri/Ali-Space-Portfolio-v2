import React, { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = {
    journey: {
      title: 'MY JOURNEY',
      content: [
        {
          year: '2020',
          role: 'Started Development',
          description: 'Began my journey into web development, learning HTML, CSS, and JavaScript fundamentals.',
        },
        {
          year: '2021',
          role: 'React Specialist',
          description: 'Mastered React ecosystem and started building complex single-page applications.',
        },
        {
          year: '2023',
          role: 'Full-Stack Developer',
          description: 'Expanded into backend technologies and became proficient in Node.js and databases.',
        },
        {
          year: '2025',
          role: 'Creative Technologist',
          description: 'Now focusing on creating unique digital experiences that blend design and code.',
        },
      ],
    },
    philosophy: {
      title: 'PHILOSOPHY',
      content: [
        {
          principle: 'User-Centric',
          description: 'Every line of code should serve the end user. Beautiful interfaces mean nothing without functionality.',
        },
        {
          principle: 'Performance First',
          description: 'Optimized, fast-loading experiences are non-negotiable. Speed is a feature.',
        },
        {
          principle: 'Continuous Learning',
          description: 'Technology evolves rapidly. Staying curious and adaptive is the only way forward.',
        },
        {
          principle: 'Attention to Detail',
          description: 'Perfection lies in the details. Micro-interactions and polish separate good from great.',
        },
      ],
    },
    interests: {
      title: 'INTERESTS',
      content: [
        { name: 'Generative Art', icon: '◆' },
        { name: 'Creative Coding', icon: '▲' },
        { name: 'UI Animation', icon: '●' },
        { name: 'WebGL & 3D', icon: '■' },
        { name: 'Design Systems', icon: '◇' },
        { name: 'Open Source', icon: '▼' },
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
              I'm a developer who believes code is a creative medium.
            </h3>
            <p className="intro-paragraph">
              With over 5 years of experience crafting digital experiences, I specialize
              in building interfaces that are not just functional, but memorable. My work
              sits at the intersection of design, technology, and user experience.
            </p>
            <p className="intro-paragraph">
              I'm passionate about pushing the boundaries of what's possible on the web,
              experimenting with new technologies, and creating experiences that users
              actually enjoy interacting with.
            </p>
          </div>

          <div className="intro-image">
            <div className="image-placeholder">
              <div className="image-frame">
                <svg viewBox="0 0 200 200" className="profile-svg">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: '#0088ff', stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
                  <circle cx="100" cy="100" r="60" fill="rgba(0,0,0,0.3)" />
                  <circle cx="100" cy="100" r="40" fill="url(#grad1)" />
                </svg>
              </div>
              <div className="image-label">YOUR_PHOTO.JPG</div>
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
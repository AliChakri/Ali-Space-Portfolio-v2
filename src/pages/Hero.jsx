import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      hero.style.setProperty('--mouse-x', `${xPos}px`);
      hero.style.setProperty('--mouse-y', `${yPos}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-label">
          <span className="label-line"></span>
          <span className="label-text">DIGITAL CRAFTSMAN</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line" style={{ '--line-index': 0 }}>
            BUILDING
          </span>
          <span className="title-line title-highlight" style={{ '--line-index': 1 }}>
            DIGITAL
          </span>
          <span className="title-line" style={{ '--line-index': 2 }}>
            EXPERIENCES
          </span>
        </h1>

        <div className="hero-description">
          <p className="description-text">
            Front-end developer specializing in creating immersive web experiences
            through cutting-edge technologies and innovative design patterns.
          </p>
          <div className="description-meta">
            <span className="meta-item">CREATIVE DEVELOPER</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">UI/UX ENTHUSIAST</span>
            <span className="meta-separator">•</span>
            <span className="meta-item">BASED IN ALGERIA</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToProjects}>
            <span className="btn-text">VIEW PROJECTS</span>
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-secondary" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="btn-text">GET IN TOUCH</span>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item" style={{ '--stat-index': 0 }}>
            <div className="stat-value">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item" style={{ '--stat-index': 1 }}>
            <div className="stat-value">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item" style={{ '--stat-index': 2 }}>
            <div className="stat-value">30+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
        <span className="scroll-text">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
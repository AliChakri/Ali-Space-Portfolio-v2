import React, { useState, useEffect } from 'react';

export default function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navItems = [
    { id: 'hero', label: '00_HOME' },
    { id: 'about', label: '01_ABOUT' },
    { id: 'projects', label: '02_WORK' },
    { id: 'skills', label: '03_SKILLS' },
    { id: 'contact', label: '04_CONTACT' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-text">
            <span className="brand-name">NEURAL</span>
            <span className="brand-separator">/</span>
            <span className="brand-role">DEVELOPER</span>
          </div>
          <div className="brand-time">
            {time.toLocaleTimeString('en-US', { 
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
        </div>

        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={item.id} style={{ '--index': index }}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                <span className="nav-label">{item.label}</span>
                <span className="nav-underline"></span>
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-status">
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">AVAILABLE FOR WORK</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
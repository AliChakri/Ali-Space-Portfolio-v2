import React, { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'WEB APP',
      description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024',
      image: 'gradient-1',
    },
    {
      id: 2,
      title: 'AI Dashboard',
      category: 'SAAS',
      description: 'Analytics dashboard for AI model performance tracking and visualization.',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'Python'],
      year: '2024',
      image: 'gradient-2',
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      category: 'WEBSITE',
      description: 'Award-winning portfolio site for a digital artist with WebGL effects.',
      tech: ['React', 'Three.js', 'GSAP', 'Tailwind'],
      year: '2023',
      image: 'gradient-3',
    },
    {
      id: 4,
      title: 'Task Management',
      category: 'MOBILE APP',
      description: 'Cross-platform task manager with real-time collaboration features.',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      year: '2023',
      image: 'gradient-4',
    },
    {
      id: 5,
      title: 'Design System',
      category: 'LIBRARY',
      description: 'Component library and design system for a fintech startup.',
      tech: ['React', 'Storybook', 'CSS Modules', 'Figma'],
      year: '2024',
      image: 'gradient-5',
    },
    {
      id: 6,
      title: 'Music Visualizer',
      category: 'EXPERIMENT',
      description: 'Real-time audio visualization using Web Audio API and Canvas.',
      tech: ['JavaScript', 'Canvas', 'Web Audio', 'GLSL'],
      year: '2023',
      image: 'gradient-6',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-number">02</div>
        <h2 className="section-title">
          <span className="title-main">SELECTED WORK</span>
          <span className="title-sub">Recent Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
            style={{ '--project-index': index }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`project-image ${project.image}`}>
              <div className="image-overlay">
                <span className="overlay-text">VIEW PROJECT</span>
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <button className="project-link">
                  <span>VIEW DETAILS</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 15L15 1M15 1H5M15 1V11"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <div className="cta-content">
          <h3 className="cta-title">Want to see more?</h3>
          <p className="cta-description">
            Check out my GitHub for more projects and open-source contributions.
          </p>
          <button className="cta-button">
            <span>VISIT GITHUB</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
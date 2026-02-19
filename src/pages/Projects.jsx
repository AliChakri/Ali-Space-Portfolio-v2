import React, { useState } from 'react';
import ProjectModal from '../Components/ProjectModal';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'FULL-STACK MERN',
      type: 'Web Application',
      status: 'Production-Ready',
      year: '2024',
      cover: 'gradient-1',
      thumbnail: 'src/assets/ecom-pic1.png', // ADD THIS
      images: [
        'src/assets/ecom-pic1.png',
        'src/assets/ecom-pic2.png',
        'src/assets/ecom-pic3.png',
        'src/assets/ecom-pic4.png',
        'src/assets/ecom-pic5.png',
        'src/assets/ecom-pic6.png',
        'src/assets/panel-pic1.png',
      ],
      shortDescription:
        'Full-featured e-commerce platform with secure authentication, payments, and an advanced admin dashboard.',
      overview: [
        'Secure authentication and role-based authorization',
        'Shopping cart, checkout flow, and PayPal payment integration',
        'Lightweight multi-language (i18n) support',
        'Admin dashboard with charts, sales statistics, and order management',
        'User management, reviews, comments, and reply system',
        'Product image handling and fully responsive UI',
      ],
      architecture: [
        'JWT-based authentication and protected routes',
        'RESTful API with clean separation of concerns',
        'Server-side validation and sanitized inputs',
        'Optimized database queries for scalability',
      ],
      tech: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'PayPal API',
        'Chart.js',
      ],
    },

    {
      id: 2,
      title: 'High-Performance Task Manager',
      category: 'BACKEND / SYSTEMS',
      type: 'Backend Project',
      status: 'Academic – First Place',
      year: '2024',
      cover: 'gradient-2',
      thumbnail: 'src/assets/agenda-pic1.png', // ADD THIS
      images: [
        'src/assets/agenda-pic1.png',
        'src/assets/agenda-pic2.png',
        'src/assets/agenda-pic3.png',
        'src/assets/agenda-pic4.png',
        'src/assets/agenda-pic5.png',
      ],
      shortDescription:
        'Backend-focused task manager optimized for performance using low-level system concepts.',
      overview: [
        'Backend built with Node.js and C++ for performance-critical operations',
        'Applied core data structures: Queue, Stack, and Linked List',
        'Optimized task execution flow and memory usage',
        'College duo project that achieved first place',
      ],
      architecture: [
        'Hybrid architecture combining high-level and low-level logic',
        'Efficient memory handling and execution control',
        'Clear separation between system logic and API layer',
      ],
      tech: ['Node.js', 'C++', 'Data Structures', 'REST API'],
    },

    {
      id: 3,
      title: 'AI Model Landing Page',
      category: 'FRONTEND',
      type: 'Landing Page',
      status: 'Completed',
      year: '2023',
      cover: 'gradient-3',
      thumbnail: 'src/assets/neural-pic1.png', // ADD THIS
      images: [
        'src/assets/neural-pic1.png',
        'src/assets/neural-pic2.png',
        'src/assets/neural-pic3.png',
        'src/assets/neural-pic4.png',
        'src/assets/neural-pic5.png',
      ],
      shortDescription:
        'Modern landing page designed for an AI / neural network product.',
      overview: [
        'Clean and modern UI built with React',
        'Smooth animations and transitions',
        'Dark mode toggle support',
        'Focused on performance, clarity, and visual hierarchy',
      ],
      architecture: [
        'Component-based UI architecture',
        'Animation-driven UX without heavy libraries',
      ],
      tech: ['React', 'CSS Animations', 'Dark Mode'],
    },

    {
      id: 4,
      title: 'Portfolio v1 (NASA Theme)',
      category: 'FRONTEND',
      type: 'Personal Portfolio',
      status: 'Archived',
      year: '2023',
      cover: 'gradient-4',
      thumbnail: 'src/assets/portfolio-pic1.png', // ADD THIS
      images: [
        'src/assets/portfolio-pic1.png',
        'src/assets/portfolio-pic2.png',
        'src/assets/portfolio-pic3.png',
        'src/assets/portfolio-pic4.png',
      ],
      shortDescription:
        'First version of my personal portfolio with a NASA-inspired theme.',
      overview: [
        'Frontend-only personal portfolio',
        'NASA-inspired dark visual design',
        'Strong focus on layout, visuals, and creative styling',
      ],
      architecture: [
        'Static frontend architecture',
        'Theme-driven UI experimentation',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
    },

    {
      id: 5,
      title: 'Enterprise-Grade Authentication System',
      category: 'SECURITY / BACKEND',
      type: 'Security System',
      status: 'Production-Grade',
      year: '2025',
      cover: 'gradient-5',
      thumbnail: 'src/assets/auth-pic1.png', // ADD THIS
      images: [
        'src/assets/auth-pic1.png',
        'src/assets/auth-pic2.png',
        'src/assets/auth-pic3.png',
        'src/assets/auth-pic4.png',
        'src/assets/auth-pic5.png',
      ],
      shortDescription:
        'Highly secure authentication and authorization system designed with security-first principles.',
      overview: [
        'JWT access & refresh token rotation',
        'Two-factor authentication with backup codes',
        'Email recovery and secure password reset flows',
        'Rate limiting and abuse prevention using Redis',
        'Hashed OTPs and token blacklisting',
        'CSRF protection and XSS / NoSQL injection sanitization',
        'Secure cookies and hardened HTTP security headers',
        'Google OAuth integration',
        'Session invalidation and forced logout mechanisms',
        'Built with TypeScript and clean layered architecture',
      ],
      architecture: [
        'Security-first backend architecture',
        'Token lifecycle management and session control',
        'Strict validation schemas and sanitized inputs',
        'Scalable and maintainable TypeScript codebase',
      ],
      tech: [
        'Node.js',
        'TypeScript',
        'Express',
        'MongoDB',
        'Redis',
        'JWT',
        'OAuth',
        'Security Headers',
      ],
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
            <div className={`project-image ${project.cover}`}>
              {project.thumbnail && (
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="project-thumbnail"
                />
              )}
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
              <p className="project-description">{project.shortDescription}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <button 
                    className="project-link"
                    onClick={() => setSelectedProject(project)}
                >
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
          <a href='https://github.com/AliChakri' target="_blank" className="cta-button">
            <span>VISIT GITHUB</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
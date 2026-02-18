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
    images: [
      '/projects/ecommerce/dashboard.png',
      '/projects/ecommerce/orders.png',
      '/projects/ecommerce/product.png',
      '/projects/ecommerce/auth.png',
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
    images: [
      '/projects/task-manager/architecture.png',
      '/projects/task-manager/flow.png',
      '/projects/task-manager/benchmark.png',
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
    images: [
      '/projects/ai-landing/hero.png',
      '/projects/ai-landing/sections.png',
      '/projects/ai-landing/darkmode.png',
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
    images: [
      '/projects/portfolio-v1/home.png',
      '/projects/portfolio-v1/about.png',
      '/projects/portfolio-v1/projects.png',
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
    images: [
      '/projects/auth-system/flow.png',
      '/projects/auth-system/2fa.png',
      '/projects/auth-system/security.png',
      '/projects/auth-system/tokens.png',
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
          <button className="cta-button">
            <span>VISIT GITHUB</span>
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

// function ProjectModal({ project, onClose }) {
//   if (!project) return null;

//   return (
//     <div className="project-modal-backdrop" onClick={onClose}>
//       <div
//         className="project-modal"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="modal-header">
//           <h3 className="modal-title">{project.title}</h3>
//           <button className="modal-close" onClick={onClose}>✕</button>
//         </div>

//         <p className="modal-description">{project.shortDescription}</p>

//         <div className="modal-section">
//           <h4 className="modal-subtitle">Project Overview</h4>
//           <ul className="modal-list">
//             {project.overview.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="modal-section">
//           <h4 className="modal-subtitle">Tech Stack</h4>
//           <div className="modal-tech">
//             {project.tech.map((t, i) => (
//               <span key={i} className="tech-tag">{t}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

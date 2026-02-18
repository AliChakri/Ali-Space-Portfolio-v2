import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Only run if project exists (modal is open)
    if (!project) return;

    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = 'auto'; // or 'unset'
    };
  }, [onClose, project]); // Add 'project' to dependency array

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-advanced" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <header className="modal-header-advanced">
          <div>
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </header>

        {/* Meta */}
        <div className="modal-meta">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.type}</span>
          <span>•</span>
          <span className="meta-highlight">{project.status}</span>
        </div>

        {/* Description */}
        <p className="modal-description-advanced">
          {project.shortDescription}
        </p>

        {/* Sections */}
        <div className="modal-sections">
          <section>
            <h4>Project Overview</h4>
            <ul>
              {project?.overview?.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h4>Architecture & Security</h4>
            <ul>
              {project.architecture.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </section>

          <section>
            <h4>Tech Stack</h4>
            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="modal-footer">
          <button className="btn-secondary">VIEW CODE</button>
          <button className="btn-primary">LIVE DEMO</button>
        </footer>
      </div>
    </div>
  );
}
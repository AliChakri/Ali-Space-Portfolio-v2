import React, { useEffect, useState } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Only run if project exists (modal is open)
    if (!project) return;

    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, project]);

  useEffect(() => {
    // Reset selected image when project changes
    if (project) {
      setSelectedImage(0);
    }
  }, [project]);

  if (!project) return null;

  const handlePrevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

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

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="modal-gallery">
            <div className="gallery-main">
              <img 
                src={project.images[selectedImage]} 
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="gallery-main-image"
              />
              
              {project.images.length > 1 && (
                <>
                  <button 
                    className="gallery-nav gallery-prev" 
                    onClick={handlePrevImage}
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button 
                    className="gallery-nav gallery-next" 
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    →
                  </button>
                  <div className="gallery-counter">
                    {selectedImage + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="gallery-thumbnails">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className={`gallery-thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

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
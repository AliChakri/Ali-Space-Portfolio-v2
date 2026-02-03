import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '→' },
    { name: 'LinkedIn', url: '#', icon: '→' },
    { name: 'Twitter', url: '#', icon: '→' },
    { name: 'Dribbble', url: '#', icon: '→' },
  ];

  const contactInfo = [
    { label: 'EMAIL', value: 'hello@neuraldev.com', icon: '◆' },
    { label: 'LOCATION', value: 'Blida, Algeria', icon: '▲' },
    { label: 'AVAILABILITY', value: 'Open to opportunities', icon: '●' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <div className="section-number">04</div>
        <h2 className="section-title">
          <span className="title-main">GET IN TOUCH</span>
          <span className="title-sub">Let's Work Together</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-info-panel">
          <div className="info-intro">
            <h3 className="info-heading">Let's create something amazing.</h3>
            <p className="info-text">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </p>
          </div>

          <div className="info-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item" style={{ '--info-index': index }}>
                <span className="info-icon">{info.icon}</span>
                <div className="info-content">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="social-links">
            <div className="social-title">FIND ME ON</div>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  style={{ '--social-index': index }}
                >
                  <span className="social-name">{link.name}</span>
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="label-text">YOUR NAME</span>
                <span className="label-required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="label-text">EMAIL ADDRESS</span>
                <span className="label-required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <span className="label-text">SUBJECT</span>
                <span className="label-required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Project Inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <span className="label-text">MESSAGE</span>
                <span className="label-required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={`form-submit ${status}`}
              disabled={status === 'sending'}
            >
              <span className="submit-text">
                {status === 'sending' && 'SENDING...'}
                {status === 'success' && 'MESSAGE SENT!'}
                {!status && 'SEND MESSAGE'}
              </span>
              <span className="submit-arrow">→</span>
            </button>

            {status === 'success' && (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <span className="success-text">
                  Thanks! I'll get back to you soon.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">NEURAL DEVELOPER</span>
            <span className="footer-year">© 2025</span>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
          <div className="footer-credit">
            <span>Designed & Built with</span>
            <span className="footer-heart">♥</span>
            <span>by Neural Dev</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
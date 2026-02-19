import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // 'sending', 'success', 'error', 'rate-limited'
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [resetTime, setResetTime] = useState(null);

  // Rate limiting logic
  useEffect(() => {
    const rateLimitData = JSON.parse(localStorage.getItem('emailRateLimit')) || {
      attempts: 0,
      timestamp: Date.now(),
    };

    const oneHour = 60 * 60 * 1000;
    const timePassed = Date.now() - rateLimitData.timestamp;

    if (timePassed >= oneHour) {
      // Reset after 1 hour
      localStorage.setItem('emailRateLimit', JSON.stringify({
        attempts: 0,
        timestamp: Date.now(),
      }));
      setRemainingAttempts(3);
      setResetTime(null);
    } else {
      const remaining = 3 - rateLimitData.attempts;
      setRemainingAttempts(remaining);
      
      if (remaining <= 0) {
        const resetAt = rateLimitData.timestamp + oneHour;
        setResetTime(resetAt);
      }
    }
  }, [status]);

  const checkRateLimit = () => {
    const rateLimitData = JSON.parse(localStorage.getItem('emailRateLimit')) || {
      attempts: 0,
      timestamp: Date.now(),
    };

    const oneHour = 60 * 60 * 1000;
    const timePassed = Date.now() - rateLimitData.timestamp;

    if (timePassed >= oneHour) {
      // Reset counter
      localStorage.setItem('emailRateLimit', JSON.stringify({
        attempts: 0,
        timestamp: Date.now(),
      }));
      return true;
    }

    if (rateLimitData.attempts >= 3) {
      return false;
    }

    return true;
  };

  const incrementAttempts = () => {
    const rateLimitData = JSON.parse(localStorage.getItem('emailRateLimit')) || {
      attempts: 0,
      timestamp: Date.now(),
    };

    rateLimitData.attempts += 1;
    localStorage.setItem('emailRateLimit', JSON.stringify(rateLimitData));
    setRemainingAttempts(3 - rateLimitData.attempts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check rate limit
    if (!checkRateLimit()) {
      setStatus('rate-limited');
      return;
    }

    setStatus('sending');

    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ali', // Your name
        }
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        incrementAttempts();
        
        setTimeout(() => setStatus(''), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatTimeRemaining = () => {
    if (!resetTime) return '';
    
    const now = Date.now();
    const diff = resetTime - now;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    return `${minutes}m ${seconds}s`;
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/AliChakri', icon: '→' },
    { name: 'LinkedIn', url: '#', icon: '→' },
    { name: 'Twitter X', url: '#', icon: '→' },
    { name: 'Instagram', url: '#', icon: '→' },
  ];

  const contactInfo = [
    { label: 'LOCATION', value: 'Algeria', icon: '▲' },
    { label: 'AVAILABILITY', value: 'Open to internships & projects', icon: '●' },
    { label: 'FOCUS', value: 'Backend & MERN Stack Development', icon: '◆' },
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
            <h3 className="info-heading">
              Let's build reliable and secure systems.
            </h3>
            <p className="info-text">
              I'm open to meaningful opportunities, collaborations, and technical discussions.
              If you're working on a product that values clean architecture, security, and
              long-term maintainability, feel free to reach out using the form.
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
                placeholder="Describe your idea, problem, or opportunity..."
              ></textarea>
            </div>

            {remainingAttempts < 3 && remainingAttempts > 0 && (
              <div className="rate-limit-warning">
                <span className="warning-icon">⚠</span>
                <span className="warning-text">
                  {remainingAttempts} message{remainingAttempts !== 1 ? 's' : ''} remaining this hour
                </span>
              </div>
            )}

            <button
              type="submit"
              className={`form-submit ${status}`}
              disabled={status === 'sending' || status === 'rate-limited'}
            >
              <span className="submit-text">
                {status === 'sending' && 'SENDING...'}
                {status === 'success' && 'MESSAGE SENT!'}
                {status === 'error' && 'FAILED - TRY AGAIN'}
                {status === 'rate-limited' && 'RATE LIMIT REACHED'}
                {!status && 'SEND MESSAGE'}
              </span>
              <span className="submit-arrow">→</span>
            </button>

            {status === 'success' && (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <span className="success-text">
                  Message received. I'll review it and respond as soon as possible.
                </span>
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                <span className="error-icon">✕</span>
                <span className="error-text">
                  Failed to send message. Please try again or contact me directly.
                </span>
              </div>
            )}

            {status === 'rate-limited' && (
              <div className="form-rate-limit">
                <span className="rate-limit-icon">⏳</span>
                <span className="rate-limit-text">
                  You've reached the maximum of 3 messages per hour. Please try again in {formatTimeRemaining()}.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">MERN Stack Developer</span>
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
            <span>BY ALI DEV</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
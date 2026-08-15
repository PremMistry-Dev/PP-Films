import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Film, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Header({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <div className="logo-icon">
              <Film size={22} />
            </div>
            <div>
              <span>PUSHPA PRAKASH</span>
              <span style={{ color: 'var(--color-primary)', display: 'block', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.1em' }}>
                FILMS & STUDIO
              </span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#podcast-studio" className="nav-link" style={{ color: 'var(--color-accent)' }}>Podcast Studio</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#calculator" className="nav-link">Estimator</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary btn-sm">
              <Phone size={15} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!%20I%20would%20like%20to%20inquire%20about%20video%20production%20/%20podcast%20studio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>

            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <button className="modal-close-btn" onClick={closeMobile}>
            <X size={24} />
          </button>

          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={closeMobile} className="mobile-nav-link">Home</a></li>
            <li><a href="#services" onClick={closeMobile} className="mobile-nav-link">Services</a></li>
            <li><a href="#podcast-studio" onClick={closeMobile} className="mobile-nav-link" style={{ color: 'var(--color-accent)' }}>Podcast Studio</a></li>
            <li><a href="#portfolio" onClick={closeMobile} className="mobile-nav-link">Portfolio</a></li>
            <li><a href="#calculator" onClick={closeMobile} className="mobile-nav-link">Estimator</a></li>
            <li><a href="#about" onClick={closeMobile} className="mobile-nav-link">About</a></li>
            <li><a href="#contact" onClick={closeMobile} className="mobile-nav-link">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '280px' }}>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-primary btn-lg">
              <Phone size={18} />
              <span>Call Studio Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

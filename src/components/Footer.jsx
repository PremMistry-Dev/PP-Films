import React from 'react';
import { Film, Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { BUSINESS_INFO } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Film size={24} color="var(--color-primary)" />
              <span style={{ color: '#fff' }}>PUSHPA PRAKASH FILMS</span>
            </div>
            <p className="footer-desc">
              High-impact video production agency and 4K Podcast Studio located in Bhayandar East, Mira Bhayandar, Maharashtra. Run by a young creative team dedicated to bringing your brand vision to life.
            </p>
            <div className="social-links">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#podcast-studio" className="footer-link">Podcast Studio</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio Showcase</a></li>
              <li><a href="#calculator" className="footer-link">Instant Estimator</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#contact" className="footer-link">Contact & Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Instagram Reels Production</a></li>
              <li><a href="#podcast-studio" className="footer-link">Podcast Studio Rental</a></li>
              <li><a href="#services" className="footer-link">Promotional Videos</a></li>
              <li><a href="#services" className="footer-link">Short Film Production</a></li>
              <li><a href="#services" className="footer-link">UGC Video Ads</a></li>
              <li><a href="#services" className="footer-link">Video Editing & Motion</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Studio Location</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--color-primary)" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} style={{ color: '#fff', fontWeight: '600' }}>
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--color-primary)" />
                <a href={`mailto:${BUSINESS_INFO.email}`} style={{ color: '#fff' }}>
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Pushpa Prakash Films. All Rights Reserved. Designed for high conversion & fast performance.
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
            1st Floor, Shree Krishna Krupa Building, BP Rd, Bhayandar East, Mira Bhayandar, Maharashtra 401101
          </div>
        </div>
      </div>
    </footer>
  );
}

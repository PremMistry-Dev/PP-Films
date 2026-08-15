import React from 'react';
import { Phone, MessageSquare, Play, Sparkles, Star, Mic, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function Hero({ onOpenVideoModal }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="Cinematic video production setup" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge badge-rec">
              <span className="rec-dot"></span>
              <span>STUDIO LIVE IN BHAYANDAR EAST</span>
            </div>

            <h1 className="hero-headline">
              We Bring Your Vision To Life With <span className="text-gradient">Scroll-Stopping</span> Cinema.
            </h1>

            <p className="hero-subhead">
              Full-service video production, high-retention Instagram Reels, UGC brand videos & Bhayandar’s premium soundproof <strong>4K Podcast Studio Rental</strong>. Created by a young, energetic team focused on real business growth.
            </p>

            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary btn-lg">
                <Sparkles size={18} />
                <span>Book Studio / Get Quote</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!%20I%20saw%20your%20website%20and%20want%20to%20discuss%20a%20video%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={() => onOpenVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}
                className="btn btn-secondary btn-lg"
              >
                <Play size={18} fill="#fff" />
                <span>Watch Reel</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Videos Delivered</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">4K</span>
                <span className="stat-label">Multi-Cam Studio</span>
              </div>

              <div className="stat-item">
                <span className="stat-number">4.9 ★</span>
                <span className="stat-label">Client Rating</span>
              </div>
            </div>
          </div>

          <div className="hero-preview-card glass-card">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
              alt="Pushpa Prakash Podcast Studio"
              className="hero-preview-img"
            />
            <button
              onClick={() => onOpenVideoModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}
              className="play-overlay-btn"
              aria-label="Play studio tour"
            >
              <Play size={32} fill="#fff" style={{ marginLeft: '4px' }} />
            </button>

            <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem', background: 'rgba(9,11,16,0.85)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Mic size={16} color="var(--color-accent)" />
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>Podcast Studio Rental</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Shure SM7B mics, multi-cam 4K, soundproof room in Bhayandar East.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

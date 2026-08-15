import React from 'react';
import { Film, Users, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section section-darker">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Pushpa Prakash Films Creative Crew"
              className="about-img"
            />

            <div className="about-experience-badge">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
                Young & Passionate Crew
              </div>
            </div>
          </div>

          <div>
            <span className="badge">Who We Are</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              A Group Of Young Creators Happy To Bring Your <span className="text-gradient">Vision To Life</span>
            </h2>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem', lineHeight: '1.7' }}>
              At <strong>Pushpa Prakash Films</strong>, we believe every business, brand, and story deserves cinematic, high-retention video production. We are a young, energetic team of directors, camera operators, editors, and content strategists based right here in Bhayandar East.
            </p>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.8rem', lineHeight: '1.7' }}>
              We combined our passion for modern visual storytelling with state-of-the-art 4K cameras, professional lighting rigs, and an on-site <strong>soundproof Podcast Studio</strong> so local businesses and creators don't have to compromise on quality or travel miles away.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <CheckCircle size={18} color="var(--color-primary)" />
                <span>Hands-on Creative Directors</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <CheckCircle size={18} color="var(--color-primary)" />
                <span>Trending Reels Strategy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <CheckCircle size={18} color="var(--color-primary)" />
                <span>4K Multi-Cam Equipment</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: '600' }}>
                <CheckCircle size={18} color="var(--color-primary)" />
                <span>Transparent Local Pricing</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary btn-lg">
              <Sparkles size={18} />
              <span>Work With Our Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

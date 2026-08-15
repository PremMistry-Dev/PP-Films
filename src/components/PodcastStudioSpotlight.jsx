import React from 'react';
import { Mic, Video, VolumeX, Sparkles, Sliders, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function PodcastStudioSpotlight() {
  const podcastFeatures = [
    { icon: VolumeX, text: "Acoustically Soundproofed Studio" },
    { icon: Mic, text: "Shure SM7B Broadcast Microphones" },
    { icon: Video, text: "Multi-Angle 4K Camera Recording" },
    { icon: Sparkles, text: "Customizable Ambient RGB Lighting" },
    { icon: Sliders, text: "Live Audio Mixer & Monitoring" },
    { icon: CheckCircle2, text: "Instant Raw File Transfer" }
  ];

  return (
    <section id="podcast-studio" className="section section-darker">
      <div className="container">
        <div className="podcast-spotlight">
          <div className="podcast-grid">
            <div>
              <div className="badge badge-accent">
                <Mic size={14} style={{ marginRight: '4px' }} />
                <span>BHAYANDAR EAST LOCATION EXCLUSIVE</span>
              </div>

              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                Professional On-Site <span className="text-gradient-accent">Podcast Studio</span> Rental
              </h2>

              <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Stop traveling 15+ kilometers to South Mumbai or Bandra for quality studio space. Record your video podcasts, interviews, YouTube talk shows, and audiobooks right here in Bhayandar East.
              </p>

              <div className="podcast-features">
                {podcastFeatures.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="p-feature-item">
                      <IconComp size={20} className="p-feature-icon" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!%20I%20want%20to%20book%20a%20Podcast%20Studio%20slot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Sparkles size={18} />
                  <span>Reserve Studio Slot</span>
                </a>

                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-secondary btn-lg">
                  <Phone size={18} />
                  <span>Call 098675 98109</span>
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="glass-card" style={{ padding: '0.8rem', borderRadius: '24px' }}>
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
                  alt="Podcast studio equipment setup"
                  style={{ width: '100%', borderRadius: '18px', objectFit: 'cover', aspectRatio: '4/3' }}
                />
              </div>

              <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'var(--color-surface)', border: '1px solid var(--color-accent)', padding: '0.8rem 1.2rem', borderRadius: '14px', boxShadow: 'var(--shadow-glow-accent)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>HOURLY & DAY RATES</div>
                <div style={{ fontWeight: '800', color: 'var(--color-accent)', fontSize: '1.1rem' }}>Starting @ ₹1,499 / hr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

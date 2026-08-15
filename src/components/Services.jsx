import React, { useState } from 'react';
import {
  Smartphone, Mic, Video, UserCheck, Film, Clapperboard,
  Share2, Briefcase, TrendingUp, Check, Clock, ArrowRight, X, Sparkles, MessageSquare
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/content';

const iconMap = {
  Smartphone: Smartphone,
  Mic: Mic,
  Video: Video,
  UserCheck: UserCheck,
  Film: Film,
  Clapperboard: Clapperboard,
  Share2: Share2,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleInquire = (serviceTitle) => {
    const text = encodeURIComponent(`Hi Pushpa Prakash Films! I am interested in your ${serviceTitle} service. Can you share more details and availability?`);
    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Do</span>
          <h2 className="section-title">
            End-To-End Video Production & <span className="text-gradient">Content Solutions</span>
          </h2>
          <p className="section-subtitle">
            From viral Instagram Reels to high-ticket brand commercials and on-site podcast studio rentals—we handle concept, shooting, and editing all under one roof.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Video;
            return (
              <div key={service.id} className="service-card glass-card">
                <div className="service-header">
                  <div className="service-icon-box">
                    <IconComponent size={26} />
                  </div>
                  <span className={`badge ${service.id === 'podcast-rental' ? 'badge-accent' : ''}`}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-deliverables">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="deliverable-item">
                      <Check size={14} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <div className="turnaround-tag">
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {service.turnaround}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedService(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="badge">{selectedService.category}</span>
              <span className="badge badge-accent">{selectedService.badge}</span>
            </div>

            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              {selectedService.title}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              {selectedService.shortDesc}
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.8rem' }}>What's Included:</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    <Check size={16} color="var(--color-primary)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Estimated Turnaround</div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{selectedService.turnaround}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Starting Investment</div>
                <div style={{ fontWeight: '700', color: '#fff' }}>{selectedService.priceRange}</div>
              </div>

              <button
                onClick={() => handleInquire(selectedService.title)}
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

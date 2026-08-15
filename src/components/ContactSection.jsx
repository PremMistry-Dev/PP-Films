import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { BUSINESS_INFO, SERVICES } from '../data/content';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Instagram Reels Production',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Instagram Reels Production',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Get In Touch</span>
          <h2 className="section-title">
            Book Your Session Or <span className="text-gradient">Get A Quote</span>
          </h2>
          <p className="section-subtitle">
            Visit our Bhayandar East studio, give us a call, or send a message. We usually respond within 30 minutes!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card glass-card">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-label">Studio Address</div>
                <div className="contact-value">{BUSINESS_INFO.address}</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-label">Phone Inquiry</div>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="contact-value" style={{ color: 'var(--color-primary)' }}>
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-label">Email Address</div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="contact-value">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Clock size={22} />
              </div>
              <div>
                <div className="contact-label">Studio Hours</div>
                <div className="contact-value">{BUSINESS_INFO.hours}</div>
              </div>
            </div>

            <div className="holiday-banner">
              <AlertTriangle size={20} style={{ flexShrink: 0 }} />
              <div>{BUSINESS_INFO.holidayNote}</div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ flex: 1 }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>

              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                <Phone size={18} />
                <span>Call Studio</span>
              </a>
            </div>

            <div className="map-container">
              <iframe
                title="Pushpa Prakash Films Studio Location"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form glass-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
              Send Inquiry Form
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill out this form and our creative team will get back to you with custom package details.
            </p>

            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '12px', color: '#fff' }}>
                <CheckCircle size={48} color="var(--color-whatsapp)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>Inquiry Sent Successfully!</h4>
                <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  Thank you! Our team will contact you shortly at <strong>{formData.phone || formData.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98675 98109"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="form-select"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} style={{ background: '#121622', color: '#fff' }}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details / Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand, video ideas, preferred dates for studio rental..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

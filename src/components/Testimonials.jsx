import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Client Reviews</span>
          <h2 className="section-title">
            What Local Brands Say <span className="text-gradient">About Us</span>
          </h2>
          <p className="section-subtitle">
            Read how Pushpa Prakash Films helped local business owners and creators achieve real reach and engagement.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card glass-card">
              <div>
                <div className="stars" style={{ marginBottom: '1rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-content">"{item.content}"</p>
              </div>

              <div className="testimonial-author">
                <img src={item.avatar} alt={item.name} className="author-avatar" />
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

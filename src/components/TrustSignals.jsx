import React from 'react';
import { Star, ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';

export default function TrustSignals() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-flex">
          <div className="trust-badge-group">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <div>
              <div className="trust-text">4.9/5 Rating on Google Reviews</div>
              <div className="client-tagline">Trusted by local brands & creators in Bhayandar & Mumbai</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <Zap size={16} color="var(--color-primary)" />
              <span>48h Fast Editing Option</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <Award size={16} color="var(--color-accent)" />
              <span>Broadcast 4K Quality</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <ShieldCheck size={16} color="var(--color-gold)" />
              <span>Full Raw Data Handover</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

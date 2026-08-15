import React from 'react';
import { Zap, Mic, Film, TrendingUp, MapPin } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/content';

const iconMap = {
  Zap: Zap,
  Mic: Mic,
  Film: Film,
  TrendingUp: TrendingUp,
  MapPin: MapPin
};

export default function Differentiators() {
  return (
    <section className="section section-darker">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2 className="section-title">
            The <span className="text-gradient">Pushpa Prakash</span> Advantage
          </h2>
          <p className="section-subtitle">
            We are not just another video editor with a laptop. We are a dedicated studio team passionate about making content that drives actual business results.
          </p>
        </div>

        <div className="diff-grid">
          {DIFFERENTIATORS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Zap;
            return (
              <div key={idx} className="diff-card glass-card">
                <div className="diff-icon">
                  <IconComp size={28} />
                </div>
                <h3 className="diff-title">{item.title}</h3>
                <p className="diff-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

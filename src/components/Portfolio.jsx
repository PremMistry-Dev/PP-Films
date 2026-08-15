import React, { useState } from 'react';
import { Play, Filter } from 'lucide-react';
import { PORTFOLIO } from '../data/content';

export default function Portfolio({ onOpenVideoModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Featured Work</span>
          <h2 className="section-title">
            Our Recent <span className="text-gradient">Production Showcase</span>
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of high-impact Instagram Reels, podcast episodes, commercial promos, and award-winning short films.
          </p>
        </div>

        <div className="filter-tabs">
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Work ({PORTFOLIO.length})
          </button>
          <button
            onClick={() => setActiveTab('reels')}
            className={`tab-btn ${activeTab === 'reels' ? 'active' : ''}`}
          >
            Instagram Reels
          </button>
          <button
            onClick={() => setActiveTab('promos')}
            className={`tab-btn ${activeTab === 'promos' ? 'active' : ''}`}
          >
            Brand Promos
          </button>
          <button
            onClick={() => setActiveTab('podcasts')}
            className={`tab-btn ${activeTab === 'podcasts' ? 'active' : ''}`}
          >
            Podcast Studio
          </button>
          <button
            onClick={() => setActiveTab('films')}
            className={`tab-btn ${activeTab === 'films' ? 'active' : ''}`}
          >
            Short Films
          </button>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card glass-card"
              onClick={() => onOpenVideoModal(item.videoUrl)}
              style={{ cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.title} className="portfolio-img" />

              <div className="portfolio-overlay">
                <span className="portfolio-tag">{item.tag}</span>
                <h3 className="portfolio-title">{item.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                  <span className="portfolio-client">{item.client}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                    {item.metric}
                  </span>
                </div>
              </div>

              <div className="play-overlay-btn" style={{ width: '56px', height: '56px' }}>
                <Play size={22} fill="#fff" style={{ marginLeft: '2px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

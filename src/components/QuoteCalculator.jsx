import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function QuoteCalculator() {
  const [selectedPackage, setSelectedPackage] = useState('reels-pack');
  const [selectedAddons, setSelectedAddons] = useState(['scripting']);

  const packages = [
    { id: 'reels-pack', name: '5 Instagram Reels Pack', price: 9999, desc: '4K vertical shooting, editing, hooks & trendy audio' },
    { id: 'podcast-2h', name: '2-Hour Podcast Studio', price: 2999, desc: 'Soundproof room, 4K multi-cam & Shure mics setup' },
    { id: 'brand-promo', name: 'Commercial Brand Promo', price: 14999, desc: 'Cinematic brand video with color grade & voiceover' },
    { id: 'editing-only', name: 'Video Editing Retainer', price: 6999, desc: 'Professional post-production & motion graphics' }
  ];

  const addons = [
    { id: 'drone', name: 'Drone 4K Aerial Footage', price: 3500 },
    { id: 'scripting', name: 'Scriptwriting & Hook Strategy', price: 1500 },
    { id: 'express', name: 'Express 48h Delivery', price: 2500 },
    { id: 'actor', name: 'UGC Presenter / Model Sourcing', price: 3000 }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const selectedPkgObj = packages.find((p) => p.id === selectedPackage) || packages[0];
  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const item = addons.find((a) => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalPrice = selectedPkgObj.price + addonsTotal;

  const handleSendQuoteWhatsApp = () => {
    const addonNames = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `Hi Pushpa Prakash Films! I calculated a project estimate on your website:\n\n` +
      `- Package: ${selectedPkgObj.name} (₹${selectedPkgObj.price.toLocaleString()})\n` +
      `- Addons: ${addonNames || 'None'}\n` +
      `- Estimated Total: ₹${totalPrice.toLocaleString()}\n\n` +
      `Can we discuss dates and final quotation?`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Instant Project Estimator</span>
          <h2 className="section-title">
            Calculate Your Video & <span className="text-gradient">Studio Quote</span>
          </h2>
          <p className="section-subtitle">
            Get an instant estimated price for your video project or podcast recording session in seconds.
          </p>
        </div>

        <div className="calculator-box glass-card">
          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>
            1. Select Primary Service / Package:
          </h3>

          <div className="calc-options-grid">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`calc-option-btn ${selectedPackage === pkg.id ? 'selected' : ''}`}
              >
                <div className="calc-title">{pkg.name}</div>
                <div className="calc-desc">{pkg.desc}</div>
                <div style={{ color: 'var(--color-primary)', fontWeight: '800', marginTop: '0.6rem' }}>
                  ₹{pkg.price.toLocaleString()}
                </div>
              </button>
            ))}
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>
            2. Choose Optional Add-Ons:
          </h3>

          <div className="addons-list">
            {addons.map((addon) => (
              <label key={addon.id} className="addon-checkbox">
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => toggleAddon(addon.id)}
                />
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#fff' }}>{addon.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>+ ₹{addon.price.toLocaleString()}</div>
                </div>
              </label>
            ))}
          </div>

          <div className="calc-summary">
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Estimated Investment</div>
              <div className="calc-price">₹{totalPrice.toLocaleString()}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)' }}>*Final quote subject to scope & studio availability</div>
            </div>

            <button onClick={handleSendQuoteWhatsApp} className="btn btn-whatsapp btn-lg">
              <MessageSquare size={18} />
              <span>Get This Quote on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

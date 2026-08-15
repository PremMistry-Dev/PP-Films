import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export default function FloatingCTA() {
  return (
    <div className="floating-cta-bar">
      <div className="floating-cta-grid">
        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
          <Phone size={16} />
          <span>Call Studio</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.phoneRaw.replace('+', '')}?text=Hi%20Pushpa%20Prakash%20Films!%20I%20want%20to%20inquire%20about%20a%20video%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ width: '100%' }}
        >
          <MessageSquare size={16} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

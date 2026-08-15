import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '1rem', maxWidth: '850px', background: '#000' }}
      >
        <button className="modal-close-btn" onClick={onClose} style={{ zIndex: 10 }}>
          <X size={24} />
        </button>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="Pushpa Prakash Films Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

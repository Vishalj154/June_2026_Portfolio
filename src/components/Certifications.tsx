import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import certWebdev from '../assets/certWebdev.jpg';
import certPython from '../assets/certPython.jpg';
import certSharktank from '../assets/cert_sharktank.jpg';
import './Certifications.css';

interface Cert {
  title: string;
  issuer: string;
  year: string;
  img: string;
  link?: string;
  color: string;
}

const certs: Cert[] = [
  { title: 'Ultimate Web Development Bootcamp', issuer: 'CodeWithHarry', year: '2024', img: certWebdev, color: '#2563eb' },
  { title: 'Complete Python Bootcamp 2026', issuer: 'CodeWithHarry', year: '2025', img: certPython, color: '#7c3aed' },
  { title: 'ACM Shark Tank Finalist', issuer: 'ACM FCRIT', year: '2025', img: certSharktank, color: '#0891b2' },
];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  useEffect(() => {
    if (!activeCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCert(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  const openCertificate = (cert: Cert) => {
    if (cert.link && cert.link !== '#') {
      window.open(cert.link, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveCert(cert);
  };

  return (
    <>
      <section id="certifications" style={{ background: 'rgba(37,99,235,0.03)' }}>
        <div className="section-title-wrapper">
          <div className="section-label"># certifications</div>
          <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">Validated skills through professional courses and competitions.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.75rem' }}>
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 0 1.5rem' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div style={{ height: '200px', overflow: 'hidden', borderRadius: '16px 16px 0 0', flexShrink: 0 }}>
                <button
                  type="button"
                  className="cert-card-thumb"
                  onClick={() => openCertificate(c)}
                  aria-label={`View ${c.title} certificate`}
                >
                  <img src={c.img} alt={c.title} />
                </button>
              </div>
              <div style={{ padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>{c.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{c.issuer}</span>
                  <span className="badge">{c.year}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openCertificate(c)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}
                >
                  <ZoomIn size={14} /> View Certificate
                </button>
              </div>
              <div style={{ height: '3px', background: `linear-gradient(90deg,${c.color},transparent)`, borderRadius: '0 0 2px 2px', margin: '0 1.5rem' }} />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal-title"
            >
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close certificate viewer"
              >
                <X size={18} />
              </button>
              <div className="cert-modal-image-wrap">
                <img src={activeCert.img} alt={activeCert.title} className="cert-modal-image" />
              </div>
              <div className="cert-modal-footer">
                <div className="cert-modal-caption">
                  <h3 id="cert-modal-title">{activeCert.title}</h3>
                  <p>{activeCert.issuer} · {activeCert.year}</p>
                </div>
                <div className="cert-modal-actions">
                  <a
                    href={activeCert.img}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                  >
                    <ExternalLink size={14} /> Open in new tab
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ fontSize: '0.82rem', padding: '0.45rem 1rem' }}
                    onClick={() => setActiveCert(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

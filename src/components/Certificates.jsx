import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, ShieldCheck, X } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  if (!certificatesData || certificatesData.length === 0) return null;

  return (
    <section id="certificates" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              06 — Verified Accreditations
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Formal technical certifications, industry credentials, and verified achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
              className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300 space-y-6 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {cert.image && (
                  <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] aspect-[16/11] bg-[var(--bg-secondary)] relative group-hover:border-[var(--accent-terracotta)]/40 transition-colors">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                      {cert.year}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--accent-terracotta)] group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4" />
                  </div>
                  {cert.serialNo && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-terracotta)] font-bold border border-[var(--border-subtle)]">
                      Reg: #{cert.serialNo}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs font-mono text-[var(--accent-terracotta)] font-bold uppercase tracking-wider block mb-1">
                    {cert.issuer}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors pt-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
                    <span>Verified Credential</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-subtle)] shadow-2xl z-10 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-terracotta)] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>{selectedCert.issuer} — {selectedCert.year}</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)]"
                >
                  <X className="w-4 h-4 text-[var(--text-primary)]" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {selectedCert.image && (
                <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] aspect-video bg-[var(--bg-secondary)]">
                  <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  Verified Skills & Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {selectedCert.url && (
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Verify Online Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

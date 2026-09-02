import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              07 — Endorsements & Peer Reviews
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Testimonials
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[var(--text-muted)] px-2">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full p-8 md:p-14 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] space-y-8 shadow-sm"
            >
              <Quote className="w-10 h-10 text-[var(--accent-terracotta)]/40" />

              <p className="font-serif italic text-xl sm:text-3xl text-[var(--text-primary)] leading-relaxed max-w-4xl">
                "{current.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-subtle)]">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border border-[var(--border-subtle)]"
                />
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {current.author}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-muted)]">
                    {current.role} — <span className="text-[var(--accent-terracotta)]">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

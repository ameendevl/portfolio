import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              03 — Technical & Design Capabilities
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Services & Practice
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Delivering high-fidelity products through specialized design leadership and production engineering.
          </p>
        </div>

        <div className="space-y-4">
          {servicesData.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-[var(--bg-secondary)]/50 transition-colors group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-xl sm:text-2xl font-light text-[var(--accent-terracotta)]">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[var(--border-subtle)] group-hover:border-[var(--accent-terracotta)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors flex-shrink-0 ml-4">
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-7 space-y-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                            Capabilities & Execution Focus
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)] font-medium">
                                <Check className="w-3.5 h-3.5 text-[var(--accent-terracotta)] flex-shrink-0" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="md:col-span-5 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-terracotta)] font-bold block">
                            Key Deliverables
                          </span>
                          <p className="text-xs text-[var(--text-primary)] font-mono">
                            {service.deliverables}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

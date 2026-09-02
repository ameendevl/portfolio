import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Compass, FileCheck } from 'lucide-react';
import { processData } from '../data/portfolioData';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              06 — Methodology & Workflow
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Design & Dev Process
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Six disciplined phases transforming ambiguous concepts into production-grade systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 border-b border-[var(--border-subtle)] pb-6">
          {processData.map((item, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-md'
                    : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <span className={`font-mono text-xs font-bold block mb-1 ${isActive ? 'text-[var(--accent-terracotta)]' : 'text-[var(--accent-terracotta)]'}`}>
                  PHASE {item.step}
                </span>
                <span className="font-display text-sm font-bold block truncate">
                  {item.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-light text-[var(--accent-terracotta)]">
                {processData[activeStep].step}
              </span>
              <div className="h-4 w-[1px] bg-[var(--border-subtle)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Active Execution Phase
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
                {processData[activeStep].title}
              </h3>
              <p className="font-serif italic text-lg text-[var(--accent-terracotta)]">
                {processData[activeStep].subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {processData[activeStep].description}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-primary)] font-bold">
              <FileCheck className="w-4 h-4 text-[var(--accent-terracotta)]" />
              <span>Phase Deliverables</span>
            </div>

            <div className="space-y-2.5">
              {processData[activeStep].deliverables.map((deliv, dIdx) => (
                <div key={dIdx} className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-terracotta)] flex-shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

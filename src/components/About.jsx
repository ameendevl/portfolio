import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500;
      const stepTime = 30;
      const totalSteps = duration / stepTime;
      const increment = value / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl sm:text-6xl text-[var(--text-primary)]">
      {count}
      <span className="text-[var(--accent-terracotta)] font-light">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              01 — Studio Ethos & Background
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              About {personalData.name}
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            "Design is the structural resolution of complex functional problems through clarity and restraint."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Ameen Portrait"
                  className="w-full h-full object-cover object-top contrast-105 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block">
                    {personalData.title}
                  </span>
                  <p className="font-display text-xl font-bold">{personalData.name}</p>
                  <p className="text-xs text-stone-300 font-mono">{personalData.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-terracotta)]" />
                <span>Working Philosophy</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {personalData.bio.workingStyle}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-4xl font-bold leading-tight">
                Architecting digital systems with meticulous typography, intentional whitespace, and resilient engineering.
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                {personalData.bio.intro} With over a decade of hands-on technical design leadership across European and North American technology hubs, I lead projects from fundamental user research to production React deployment.
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                {personalData.bio.philosophy}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                Core Engineering & Design Competencies
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalData.bio.keyStrengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-terracotta)]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-terracotta)] flex-shrink-0" />
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--border-subtle)]">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

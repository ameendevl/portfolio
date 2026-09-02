import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              05 — Career Timeline & Roles
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Decade-long trajectory of technical leadership across high-growth startups and global design studios.
          </p>
        </div>

        <div className="relative border-l-2 border-[var(--border-strong)] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative space-y-6"
            >
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-terracotta)]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <span className="text-lg font-serif italic text-[var(--accent-terracotta)] font-semibold">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  Key Achievements & Deliverables
                </span>
                <div className="space-y-2">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-terracotta)] flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

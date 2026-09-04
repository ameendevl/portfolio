import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, ArrowRight, Sparkles, Layers } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = project ? 'hidden' : 'unset';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        />

        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-4xl h-full bg-[var(--bg-primary)] border-l border-[var(--border-subtle)] overflow-y-auto z-10 shadow-2xl flex flex-col justify-between"
        >
          <div className="p-8 md:p-12 space-y-12">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6 sticky top-0 bg-[var(--bg-primary)]/90 backdrop-blur-md z-20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--accent-terracotta)] font-bold">
                  PROJECT {project.number}
                </span>
                <span className="text-xs text-[var(--text-muted)] font-mono">•</span>
                <span className="text-xs uppercase tracking-wider font-mono text-[var(--text-secondary)]">
                  {project.category} ({project.year})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent-terracotta)] text-[var(--text-primary)] text-xs font-mono transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close Case Study Modal"
                  className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="font-serif italic text-xl sm:text-2xl text-[var(--text-secondary)]">
                {project.subtitle}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-display font-bold text-3xl text-[var(--accent-terracotta)]">
                    {metric.value}
                  </span>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Challenge</span>
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Strategy & Approach</span>
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {project.strategy}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)]">
                The Solution & Engineering
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Technologies & Tools Employed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[var(--border-subtle)]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  Visual Systems & Artifacts Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-[var(--border-subtle)] aspect-[4/3]">
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
            <div className="flex items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent-terracotta)] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Close Drawer ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

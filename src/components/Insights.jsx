import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, X, Clock, Calendar } from 'lucide-react';
import { insightsData } from '../data/portfolioData';

export default function Insights() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="insights" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              08 — Technical Essays & Monographs
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Insights & Writing
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Perspectives on software architecture, design token pipelines, and micro-interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300 space-y-6 cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-terracotta)]">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)]">
                <span>{article.date}</span>
                <span className="flex items-center gap-1 group-hover:text-[var(--text-primary)] transition-colors">
                  <span>Read Essay</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[var(--bg-primary)] p-8 md:p-12 rounded-2xl border border-[var(--border-subtle)] shadow-2xl z-10 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <span className="text-xs font-mono text-[var(--accent-terracotta)] uppercase tracking-wider">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full border border-[var(--border-subtle)] hover:bg-[var(--bg-secondary)]"
                >
                  <X className="w-4 h-4 text-[var(--text-primary)]" />
                </button>
              </div>

              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                {selectedArticle.title}
              </h2>

              <p className="font-serif italic text-base text-[var(--text-secondary)]">
                {selectedArticle.summary}
              </p>

              <div className="prose prose-stone dark:prose-invert text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] pt-4 border-t border-[var(--border-subtle)] space-y-4">
                <p>{selectedArticle.content}</p>
                <p>
                  Building digital infrastructure requires continuous refinement. As interfaces transition from 2D web surfaces into spatial computing boundaries, engineers and designers must align on token specifications and accessible component models.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

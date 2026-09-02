import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code2, SlidersHorizontal } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject, setCustomCursorText }) {
  const [activeCategory, setActiveCategory] = useState('All Work');

  const categories = ['All Work', 'Digital Products', 'Design Systems', 'Web Applications'];

  const filteredProjects = activeCategory === 'All Work'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              02 — Selected Portfolio Works
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Featured Monograph
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm'
                    : 'border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                onMouseEnter={() => setCustomCursorText && setCustomCursorText('VIEW CASE')}
                onMouseLeave={() => setCustomCursorText && setCustomCursorText(null)}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-500"
              >
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] cursor-pointer overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] tracking-widest uppercase border border-white/10">
                      {project.category}
                    </div>

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                    <span className="font-mono text-2xl font-light text-[var(--accent-terracotta)]">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-terracotta)] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="font-serif italic text-lg text-[var(--text-secondary)]">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-[11px] font-mono bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

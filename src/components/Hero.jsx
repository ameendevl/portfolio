import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onExploreWork, onContact }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-[var(--text-secondary)]">
              {personalData.availability}
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)]"
            >
              {personalData.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[0.9]"
            >
              Ameen <br />
              <span className="font-serif italic font-normal text-[var(--text-secondary)]">
                Dev
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-xl text-[var(--text-secondary)] font-normal max-w-xl leading-relaxed"
          >
            {personalData.subtitle} Combining architectural restraint with modern computational engineering to build lasting products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={onExploreWork}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-widest">
                Explore Selected Work
              </span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            <button
              onClick={onContact}
              className="flex items-center gap-2 px-7 py-4 rounded-full border border-[var(--border-strong)] hover:border-[var(--text-primary)] text-xs font-semibold uppercase tracking-widest text-[var(--text-primary)] transition-all duration-300"
            >
              <span>Initiate Collaboration</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--border-subtle)] text-xs"
          >
            <div>
              <span className="block font-mono text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Location
              </span>
              <span className="font-medium text-[var(--text-primary)]">{personalData.location}</span>
            </div>
            <div>
              <span className="block font-mono text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Core Specialization
              </span>
              <span className="font-medium text-[var(--text-primary)]">Design Systems & React</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-mono text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Track Record
              </span>
              <span className="font-medium text-[var(--text-primary)]">1 Year Exp / 10+ Projects</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="relative w-full max-w-md aspect-[4/5] rounded-2xl p-4 bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden group cursor-pointer"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Ameen Profile"
                className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase border border-white/10">
                <Sparkles className="w-3 h-3 text-[var(--accent-terracotta)]" />
                <span>Full-Stack Engineer</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-subtle)] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block">
                  Ameen — Lead Developer
                </span>
                <p className="font-display font-bold text-sm tracking-tight text-[var(--text-primary)]">
                  Modern Web Architecture & Design Systems
                </p>
                <p className="text-xs text-[var(--text-secondary)] font-serif italic">
                  Crafting resilient digital products
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex justify-between items-center text-xs font-mono text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[var(--accent-terracotta)] animate-spin-slow" />
          <span>Scroll to explore studio monograph</span>
        </div>
        <span className="hidden sm:inline">CET (UTC+1) Zurich</span>
      </div>
    </section>
  );
}

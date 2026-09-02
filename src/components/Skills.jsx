import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const tabs = [
    { id: 'Frontend', label: 'Frontend & WebGL', icon: Code },
    { id: 'Design', label: 'Design Architecture', icon: Layout },
    { id: 'Backend', label: 'Backend & APIs', icon: Server },
    { id: 'Infrastructure', label: 'Tools & Infrastructure', icon: Cpu }
  ];

  const currentSkills = skillsData[activeTab] || [];

  return (
    <section id="skills" className="py-28 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-terracotta)] block mb-2">
              04 — Technical Mastery & Tooling
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight">
              Skills & Stack
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[var(--text-secondary)] max-w-md">
            Categorized technical capabilities honed over 10+ years of high-scale engineering.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm'
                    : 'border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Experience: {skill.exp}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-terracotta)] font-bold">
                  {skill.badge}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[var(--text-secondary)]">Proficiency</span>
                  <span className="font-bold text-[var(--text-primary)]">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-[var(--accent-terracotta)]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

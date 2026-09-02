import React, { useEffect, useState } from 'react';
import { ArrowUp, Clock } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-subtle)]">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-[var(--text-primary)] flex items-center justify-center font-display text-xs font-bold bg-[var(--accent-terracotta)] text-white">
                AD
              </div>
              <span className="font-display text-2xl font-bold uppercase tracking-tight">
                {personalData.name}
              </span>
            </div>

            <p className="font-serif italic text-lg text-[var(--text-secondary)] max-w-md">
              "Architecting digital products with structural clarity, intentional typography, and high-performance engineering."
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <Clock className="w-3.5 h-3.5 text-[var(--accent-terracotta)]" />
              <span>PKT Local Time: <strong className="text-[var(--text-primary)]">{localTime || '10:46 PM'}</strong></span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono">
              {['about', 'work', 'services', 'experience', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-terracotta)] uppercase tracking-wider transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
              Social Monographs
            </span>
            <ul className="space-y-2 text-xs font-mono">
              {personalData.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {soc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Designed & Engineered with Precision</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta)] transition-all duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="group flex items-center gap-3 text-left"
          >
            <div className="w-8 h-8 rounded-full border border-[var(--text-primary)] flex items-center justify-center font-display text-xs font-bold group-hover:bg-[var(--accent-terracotta)] group-hover:border-[var(--accent-terracotta)] group-hover:text-white transition-colors duration-300">
              AD
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight group-hover:text-[var(--accent-terracotta)] transition-colors">
                {personalData.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[var(--text-muted)] font-mono">
                Studio
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-xs uppercase tracking-widest transition-colors py-1 ${
                    isActive
                      ? 'text-[var(--accent-terracotta)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-terracotta)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-terracotta)] hover:text-white transition-all duration-300"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 lg:hidden border border-[var(--border-subtle)] rounded-full text-[var(--text-primary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--bg-primary)] flex flex-col justify-between p-8 pt-24 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono">
                Menu Navigation
              </span>
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-display text-3xl font-semibold uppercase tracking-tight hover:text-[var(--accent-terracotta)] transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-terracotta)]">
                      0{index + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="space-y-6 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex justify-between items-center text-xs text-[var(--text-secondary)]">
                <span>{personalData.location}</span>
                <span className="text-[var(--accent-terracotta)]">● {personalData.availability}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                {personalData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React from 'react';

export default function Marquee() {
  const items = [
    "THOUGHTFUL DIGITAL EXPERIENCES",
    "METICULOUS CRAFTSMANSHIP",
    "INTENTIONAL TYPOGRAPHY",
    "FUNCTIONAL ELEGANCE",
    "HEADLESS DESIGN SYSTEMS",
    "ARCHITECTURAL RESTRAINT",
    "ZERO COMPROMISE CODE"
  ];

  return (
    <div className="py-8 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-12 text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-secondary)]">
        {[...items, ...items, ...items].map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-[var(--accent-terracotta)] transition-colors whitespace-nowrap">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-[var(--accent-terracotta)]/40 flex-shrink-0" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

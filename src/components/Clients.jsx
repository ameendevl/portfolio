import React from 'react';
import { clientsData } from '../data/portfolioData';

export default function Clients() {
  return (
    <section className="py-20 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            Selected Collaborations & Partners
          </span>
          <span className="text-xs font-mono text-[var(--accent-terracotta)]">Global Engagements</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientsData.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-terracotta)]/40 transition-colors flex flex-col justify-between h-28 group"
            >
              <span className="font-display font-bold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-terracotta)] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                {client.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

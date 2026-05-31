'use client';

import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section-dark py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-3xl px-6">
        <motion.div variants={fadeUpItem}>
          <p className="font-mono text-sm uppercase tracking-widest text-forge-yellow">Career</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-[11px] top-0 h-full w-0.5 overflow-hidden rounded bg-white/10" aria-hidden>
            <motion.div
              className="h-full w-full origin-top bg-forge-orange"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-12"
          >
            {EXPERIENCE.map((entry) => (
              <motion.li key={entry.company + entry.period} variants={fadeUpItem} className="relative pl-10">
                <span
                  className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 ${
                    entry.featured
                      ? 'border-forge-orange bg-forge-orange shadow-glow'
                      : 'border-forge-cyan bg-canvas-dark'
                  }`}
                />
                <div
                  className={`rounded-2xl border p-6 ${
                    entry.featured
                      ? 'border-forge-orange/40 bg-forge-orange/5'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{entry.company}</h3>
                    <span className="font-mono text-xs text-forge-cyan">{entry.period}</span>
                  </div>
                  <p className="mt-1 text-forge-orange">{entry.role}</p>
                  {entry.location && (
                    <p className="mt-1 text-sm text-ink-dark/60">{entry.location}</p>
                  )}
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-dark/80">
                    {entry.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}

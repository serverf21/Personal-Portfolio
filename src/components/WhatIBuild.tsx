'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import StatusBadge from '@/components/StatusBadge';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { CURRENTLY_BUILDING, WHAT_I_BUILD_CARDS } from '@/lib/constants';

export default function WhatIBuild() {
  return (
    <motion.section
      id="what-i-build"
      className="section-light py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={fadeUpItem}>
          <p className="font-mono text-sm uppercase tracking-widest text-forge-orange">Focus Areas</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-light lg:text-5xl">
            What I Build
          </h2>
          <p className="mt-4 max-w-2xl text-ink-light/70">
            From agentic AI systems and developer platforms to AI-first products — here&apos;s where I
            spend my engineering energy.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {WHAT_I_BUILD_CARDS.map((card) => (
            <motion.div key={card.title} variants={fadeUpItem}>
              <Link
                href={card.href}
                className="interactive group flex h-full flex-col rounded-2xl border border-ink-light/10 bg-white p-6 shadow-sm transition hover:border-forge-orange/30 hover:shadow-glow"
              >
                <div
                  className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${card.gradient}`}
                  aria-hidden
                />
                <h3 className="font-display text-2xl font-bold text-ink-light">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light/70">
                  {card.description}
                </p>
                <span className="mt-6 font-mono text-sm text-forge-orange transition group-hover:translate-x-1">
                  {card.cta}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 rounded-2xl border border-forge-violet/25 bg-gradient-to-br from-forge-violet/5 via-white to-forge-cyan/5 p-6 md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-forge-violet">
                Currently Building
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink-light">
                Exploring the next generation of AI-native products
              </h3>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CURRENTLY_BUILDING.map((item) => (
              <li
                key={item.name}
                className="rounded-xl border border-ink-light/10 bg-canvas-light/80 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display font-semibold text-ink-light">{item.name}</h4>
                  <StatusBadge status={item.status} />
                </div>
                <p className="mt-2 text-sm text-ink-light/65">{item.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

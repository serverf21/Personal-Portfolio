'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import LazyCanvas from '@/components/LazyCanvas';
import { heroItem, heroStagger } from '@/lib/animations';
import { SITE, SOCIAL } from '@/lib/constants';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
} as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-dark relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <LazyCanvas
        className="absolute inset-0"
        loader={() => import('@/components/HeroCanvas')}
        fallbackClassName="bg-hero-mobile"
      />

      <div className="pointer-events-none absolute left-4 top-1/3 z-10 hidden flex-col gap-4 xl:flex">
        {SOCIAL.map((s) => {
          const Icon = socialIcons[s.label as keyof typeof socialIcons];
          return (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="interactive pointer-events-auto text-ink-dark/70 transition hover:text-forge-cyan"
              aria-label={s.label}
            >
              <Icon size={22} />
            </Link>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 xl:pl-6">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={heroItem}
            className="font-mono text-xs uppercase tracking-[0.2em] text-forge-cyan sm:text-sm"
          >
            {SITE.role}
          </motion.p>
          <motion.h1
            variants={heroItem}
            className="mt-4 font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-[5.5rem]"
          >
            Hi, I&apos;m <span className="text-gradient-forge">Sarvagya</span>
          </motion.h1>
          <motion.p variants={heroItem} className="mt-6 max-w-xl text-lg text-ink-dark/85 sm:text-xl">
            I build fast, scalable web apps at {SITE.company}.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-8 hidden items-center gap-5 md:flex xl:hidden"
            aria-label="Social links"
          >
            {SOCIAL.map((s) => {
              const Icon = socialIcons[s.label as keyof typeof socialIcons];
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive text-ink-dark/70 transition hover:text-forge-cyan"
                  aria-label={s.label}
                >
                  <Icon size={22} />
                </Link>
              );
            })}
          </motion.div>

          <motion.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive rounded-full bg-forge-orange px-8 py-3 font-semibold text-canvas-dark shadow-glow transition hover:brightness-110"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="interactive rounded-full border-2 border-forge-cyan px-8 py-3 font-semibold text-forge-cyan transition hover:bg-forge-cyan/10"
            >
              Let&apos;s Connect
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import LazyCanvas from '@/components/LazyCanvas';
import { heroItem, heroStagger, fadeUpItem, staggerContainer, viewportOnce } from '@/lib/animations';
import { ABOUT, ABOUT_STATS, SITE, SOCIAL } from '@/lib/constants';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
} as const;

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section id="hero" className="section-dark relative overflow-hidden pt-24">
      <div className="relative flex min-h-[85vh] items-center">
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
              I architect Agentic AI systems, developer platforms, and AI-native products at{' '}
              {SITE.company}.
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
                onClick={() =>
                  document.getElementById('what-i-build')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="interactive rounded-full bg-forge-orange px-8 py-3 font-semibold text-canvas-dark shadow-glow transition hover:brightness-110"
              >
                What I Build
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="interactive rounded-full border-2 border-forge-cyan px-8 py-3 font-semibold text-forge-cyan transition hover:bg-forge-cyan/10"
              >
                Let&apos;s Connect
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative z-10 border-t border-white/10 bg-canvas-dark/80 py-20 backdrop-blur-sm lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-10">
          <motion.div
            variants={fadeUpItem}
            className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[18rem] md:max-w-[20rem] [perspective:1200px]"
          >
            <div
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-forge-orange/60 via-forge-violet/40 to-forge-cyan/55 opacity-75 blur-[1px]"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white/20 bg-canvas-dark shadow-[0_24px_48px_-12px_rgba(255,107,53,0.28)] ring-1 ring-white/10 transition-transform duration-500 md:[transform:rotateY(-5deg)_rotateX(2deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)]">
              <Image
                src={ABOUT.portrait}
                alt="Sarvagya Saxena portrait"
                width={600}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={staggerContainer}>
            <motion.p variants={fadeUpItem} className="font-mono text-sm uppercase tracking-widest text-forge-cyan">
              About
            </motion.p>
            <motion.h2 variants={fadeUpItem} className="mt-3 font-display text-3xl font-bold lg:text-4xl">
              Building intelligent systems, not demos
            </motion.h2>
            <motion.p variants={fadeUpItem} className="mt-6 leading-relaxed text-ink-dark/80">
              {ABOUT.bio}
            </motion.p>

            <motion.div ref={ref} variants={fadeUpItem} className="mt-10 grid grid-cols-3 gap-6">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-forge-orange">
                    {inView ? (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-dark/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

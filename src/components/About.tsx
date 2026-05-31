'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { ABOUT, ABOUT_STATS } from '@/lib/constants';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <motion.section
      id="about"
      className="section-light py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-10">
        <motion.div
          variants={fadeUpItem}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto w-full max-w-[16.5rem] sm:max-w-[18rem] md:max-w-[20rem] [perspective:1200px]"
        >
          <div
            className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-forge-orange/60 via-forge-violet/40 to-forge-cyan/55 opacity-75 blur-[1px]"
            aria-hidden
          />
          <div className="relative translate-z-0 overflow-hidden rounded-2xl border-4 border-white bg-canvas-light shadow-[0_4px_6px_rgba(17,17,16,0.06),0_16px_32px_rgba(17,17,16,0.1),0_24px_48px_-12px_rgba(255,107,53,0.28)] ring-1 ring-ink-light/10 transition-transform duration-500 md:[transform:rotateY(-5deg)_rotateX(2deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)]">
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

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p variants={fadeUpItem} className="bracket-accent font-mono text-sm text-forge-orange">
            About me
          </motion.p>
          <motion.h2 variants={fadeUpItem} className="mt-3 font-display text-4xl font-bold text-ink-light lg:text-5xl">
            Building with purpose & performance
          </motion.h2>
          <motion.p variants={fadeUpItem} className="mt-6 leading-relaxed text-ink-light/80">
            {ABOUT.bio}
          </motion.p>

          <motion.div
            ref={ref}
            variants={fadeUpItem}
            className="mt-10 grid grid-cols-3 gap-6"
          >
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-forge-orange">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-light/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

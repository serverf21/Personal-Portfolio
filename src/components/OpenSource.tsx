'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { getProjectsByCategory } from '@/lib/constants';

export default function OpenSource() {
  const projects = getProjectsByCategory('opensource');

  return (
    <motion.section
      id="open-source"
      className="section-dark py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={fadeUpItem}>
          <p className="font-mono text-sm uppercase tracking-widest text-forge-yellow">Community</p>
          <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Open Source</h2>
          <p className="mt-4 max-w-2xl text-ink-dark/70">
            Experiments, demos, and tools shared openly with the developer community.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} variant="dark" />
          ))}
        </motion.div>

        <motion.div variants={fadeUpItem} className="mt-12 text-center">
          <Link
            href="https://github.com/serverf21"
            target="_blank"
            rel="noreferrer"
            className="interactive font-mono text-sm text-forge-orange underline-offset-4 hover:underline"
          >
            View all on GitHub →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

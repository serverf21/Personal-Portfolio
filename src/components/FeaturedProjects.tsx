'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { getFeaturedProjects } from '@/lib/constants';

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <motion.section
      id="featured-projects"
      className="section-dark py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={fadeUpItem}>
          <p className="font-mono text-sm uppercase tracking-widest text-forge-cyan">Highlights</p>
          <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-ink-dark/70">
            Standout work across AI systems, developer platforms, and AI-native products.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} variant="dark" />
          ))}
        </motion.div>

        <motion.div variants={fadeUpItem} className="mt-10 flex flex-wrap gap-6">
          <Link
            href="/projects/ai"
            className="interactive font-mono text-sm text-forge-cyan underline-offset-4 hover:underline"
          >
            All AI Systems →
          </Link>
          <Link
            href="/projects/platform"
            className="interactive font-mono text-sm text-forge-orange underline-offset-4 hover:underline"
          >
            All Platforms →
          </Link>
          <Link
            href="/products"
            className="interactive font-mono text-sm text-forge-violet underline-offset-4 hover:underline"
          >
            All Products →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

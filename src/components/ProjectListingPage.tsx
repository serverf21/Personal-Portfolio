'use client';

import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import ProjectCard from '@/components/ProjectCard';
import type { Project, ProjectCategory } from '@/lib/constants';
import { CATEGORY_META } from '@/lib/constants';

type ProjectListingPageProps = {
  category: ProjectCategory;
  projects: Project[];
};

export default function ProjectListingPage({ category, projects }: ProjectListingPageProps) {
  const meta = CATEGORY_META[category];

  return (
    <div className="relative min-h-screen bg-canvas-light text-ink-light">
      <header className="relative z-20 border-b border-ink-light/10 bg-canvas-light/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="interactive inline-flex items-center gap-2 font-mono text-sm text-forge-orange transition hover:text-forge-cyan"
          >
            <FiArrowLeft /> Back home
          </Link>
          <Link
            href="/"
            className="interactive font-display text-xl font-bold text-forge-orange"
          >
            SS
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <p className="font-mono text-sm uppercase tracking-widest text-forge-violet">{meta.subtitle}</p>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-6xl">{meta.title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-light/70">{meta.description}</p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} variant="light" />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="mt-12 text-center font-mono text-ink-light/50">Projects coming soon.</p>
        )}
      </main>
    </div>
  );
}

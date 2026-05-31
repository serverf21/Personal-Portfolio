'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '@/lib/constants';
import { fadeUpItem } from '@/lib/animations';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 15;
    const rotateX = -y * 15;
    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const reset = () => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)');

  return (
    <motion.article
      variants={fadeUpItem}
      className={`group ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="interactive relative h-full overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-shadow duration-300 hover:shadow-glow"
        style={{ transform, transition: 'transform 0.15s ease-out' }}
      >
        <div className="shine-layer" aria-hidden />
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient} p-6`}
            >
              <span className="font-display text-2xl font-bold text-white/90 drop-shadow-md">
                {project.name}
              </span>
            </div>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-ink-light">{project.name}</h3>
        <p className="mt-2 text-sm text-ink-light/70">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-forge-orange/40 bg-forge-orange/10 px-2.5 py-0.5 font-mono text-xs text-forge-orange shadow-[0_0_12px_rgba(255,107,53,0.25)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="interactive flex items-center gap-1 text-sm text-forge-cyan hover:underline"
            >
              <FiGithub /> GitHub
            </Link>
          )}
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="interactive flex items-center gap-1 text-sm text-forge-orange hover:underline"
            >
              <FiExternalLink /> Live
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}

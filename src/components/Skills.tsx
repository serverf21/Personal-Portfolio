'use client';

import { motion } from 'framer-motion';
import LazyCanvas from '@/components/LazyCanvas';
import { sectionReveal, fadeUpItem, viewportOnce } from '@/lib/animations';
import { TECH_GRID } from '@/lib/constants';
import {
  SiDocker,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql as SiPostgres,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si';
import { TbBrain, TbDatabase, TbRobot } from 'react-icons/tb';
import type { TechIcon } from '@/lib/constants';

type IconProps = { className?: string; style?: React.CSSProperties };

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  nodedotjs: SiNodedotjs,
  python: SiPython,
  rag: TbBrain,
  agenticai: TbRobot,
  vectordb: TbDatabase,
  tensorflow: SiTensorflow,
  firebase: SiFirebase,
  tailwindcss: SiTailwindcss,
  postgresql: SiPostgres,
  mongodb: SiMongodb,
  docker: SiDocker,
  git: SiGit,
  javascript: SiJavascript,
  threedotjs: SiThreedotjs,
};

function SimpleIconImg({ slug, color, className }: { slug: string; color: string; className?: string }) {
  const hex = color.replace('#', '');
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/${hex}`}
      alt=""
      width={32}
      height={32}
      className={`h-8 w-8 object-contain transition group-hover:scale-110 ${className ?? ''}`}
      style={{ filter: `drop-shadow(0 0 8px ${color}66)` }}
    />
  );
}

function TechIconDisplay({ tech }: { tech: TechIcon }) {
  if (tech.simpleIcon) {
    return <SimpleIconImg slug={tech.simpleIcon} color={tech.color} />;
  }
  const Icon = iconMap[tech.slug] ?? SiReact;
  return (
    <Icon
      className="text-3xl transition group-hover:scale-110"
      style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}66)` }}
    />
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-dark py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeUpItem}>
            <p className="font-mono text-sm uppercase tracking-widest text-forge-cyan">Skills</p>
            <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
              Tools I ship with
            </h2>
            <p className="mt-4 max-w-lg text-ink-dark/75">
              From React and Next.js frontends to agentic RAG systems, LangChain, vector stores, and
              cloud-native workflows — I focus on performance, maintainability, and delightful UX.
            </p>
          </motion.div>

          <LazyCanvas
            className="w-full"
            loader={() => import('@/components/SkillsGlobe')}
            mobileBehavior="hide"
          />
        </div>

        <motion.div
          variants={fadeUpItem}
          className="mt-10 grid grid-cols-3 gap-4 sm:mt-16 sm:grid-cols-4 md:grid-cols-6"
        >
          {TECH_GRID.map((tech) => (
              <div
                key={tech.name}
                className="interactive group flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-white/20 hover:shadow-[0_0_24px_var(--glow)]"
                style={{ ['--glow' as string]: `${tech.color}44` }}
              >
                <TechIconDisplay tech={tech} />
                <span className="text-center font-mono text-xs text-ink-dark/70">{tech.name}</span>
              </div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

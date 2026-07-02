'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { sectionReveal, staggerContainer, fadeUpItem, viewportOnce } from '@/lib/animations';
import { TECHNICAL_ARTICLES } from '@/lib/constants';

export default function TechnicalArticles() {
  return (
    <motion.section
      id="technical-articles"
      className="section-light py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={fadeUpItem}>
          <p className="font-mono text-sm uppercase tracking-widest text-forge-violet">Writing</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink-light lg:text-5xl">
            Technical Articles
          </h2>
          <p className="mt-4 max-w-2xl text-ink-light/70">
            Deep dives, engineering notes, and blog posts on AI systems, web platforms, and product
            building.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TECHNICAL_ARTICLES.map((article) => (
            <motion.article
              key={article.title}
              variants={fadeUpItem}
              className="interactive group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-light/10 bg-white"
            >
              <div
                className={`flex h-28 items-end bg-gradient-to-br p-5 ${article.gradient}`}
              >
                <span className="font-mono text-xs text-white/80">{article.date}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-ink-light">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-light/70">{article.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-forge-violet/30 bg-forge-violet/10 px-2.5 py-0.5 font-mono text-xs text-forge-violet"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive mt-5 inline-flex items-center gap-1 font-mono text-sm text-forge-orange hover:underline"
                >
                  Read article <FiExternalLink size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

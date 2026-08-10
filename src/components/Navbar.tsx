'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>('hero');
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => setOpen(false);

  const mobileMenu =
    mounted && open
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[1100] flex cursor-pointer items-center justify-center bg-black/90 px-6 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              onKeyDown={(e) => {
                if (e.key === 'Escape') closeMenu();
              }}
            >
              <nav
                className="flex cursor-default flex-col items-center gap-8"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col items-center gap-8">
                  {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(link.id)}
                        className={`text-xl font-medium text-ink-dark transition hover:text-forge-cyan ${
                          active === link.id ? 'text-forge-orange' : ''
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href={SITE.resumeUrl}
                      onClick={closeMenu}
                      className="inline-block rounded-full border-2 border-forge-orange px-6 py-2.5 font-semibold text-forge-orange shadow-[0_0_20px_rgba(255,107,53,0.35)]"
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <Fragment>
      <header className="pointer-events-auto fixed left-0 right-0 top-0 z-[1000] box-border w-full max-w-[100dvw] overflow-hidden border-b border-white/10 bg-canvas-dark/90 pt-[env(safe-area-inset-top)] shadow-[0_4px_24px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <nav className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-[auto_1fr_auto] md:py-4">
          {pathname === '/' ? (
            <button
              type="button"
              onClick={() => scrollTo('hero')}
              className="interactive justify-self-start font-display text-xl font-bold text-forge-orange"
              aria-label="Home"
            >
              SS
            </button>
          ) : (
            <Link
              href="/"
              className="interactive justify-self-start font-display text-xl font-bold text-forge-orange"
              aria-label="Home"
            >
              SS
            </Link>
          )}

          <ul className="hidden items-center justify-center gap-8 md:col-start-2 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`interactive nav-link-underline font-medium transition ${
                    active === link.id ? 'text-forge-orange' : 'text-ink-dark/80 hover:text-ink-dark'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2 md:col-start-3">
            <Link
              href={SITE.resumeUrl}
              className="interactive hidden rounded-full border border-forge-orange px-5 py-2 text-sm font-semibold text-forge-orange shadow-[0_0_20px_rgba(255,107,53,0.35)] transition hover:bg-forge-orange hover:text-canvas-dark md:inline-block"
            >
              Resume
            </Link>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-ink-dark transition hover:border-forge-orange hover:bg-white/15 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <FiX size={22} strokeWidth={2.5} /> : <FiMenu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </header>
      {mobileMenu}
    </Fragment>
  );
}

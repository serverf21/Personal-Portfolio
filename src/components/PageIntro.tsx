'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/constants';
import { usePrefersReducedMotion } from '@/lib/useMediaQuery';

const FULL = SITE.name;

export default function PageIntro({ onDone }: { onDone: () => void }) {
  const reduced = usePrefersReducedMotion();
  const [text, setText] = useState(reduced ? FULL : '');
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setText(FULL.slice(0, i));
      if (i >= FULL.length) {
        window.clearInterval(id);
        window.setTimeout(() => {
          setDone(true);
          onDone();
        }, 450);
      }
    }, 70);

    return () => window.clearInterval(id);
  }, [onDone, reduced]);

  if (done) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas-dark"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-display text-3xl font-semibold text-ink-dark md:text-5xl">
          {text}
          <motion.span
            className="ml-1 inline-block h-[1em] w-0.5 bg-forge-cyan"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

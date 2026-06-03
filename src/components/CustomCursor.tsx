'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIsDesktop, usePrefersReducedMotion } from '@/lib/useMediaQuery';

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  const reduced = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!isDesktop || reduced) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest('a, button, .interactive, input, textarea, label'));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
    };
  }, [isDesktop, reduced, x, y]);

  if (!isDesktop || reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      aria-hidden
    >
      <motion.span
        className="block rounded-full border-2 border-forge-orange bg-forge-orange"
        animate={{
          width: hovering ? 40 : 10,
          height: hovering ? 40 : 10,
          backgroundColor: hovering ? 'transparent' : '#FF6B35',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </motion.div>
  );
}

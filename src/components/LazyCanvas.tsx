'use client';

import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { useIsDesktop } from '@/lib/useMediaQuery';

type LazyCanvasProps = {
  loader: () => Promise<{ default: React.ComponentType }>;
  fallbackClassName?: string;
  className?: string;
  /** On viewports &lt; 768px: show CSS fallback (hero) or hide entirely (skills globe). */
  mobileBehavior?: 'fallback' | 'hide';
};

export default function LazyCanvas({
  loader,
  fallbackClassName = 'bg-hero-mobile',
  className = '',
  mobileBehavior = 'fallback',
}: LazyCanvasProps) {
  const isDesktop = useIsDesktop();
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' });

  const Component = dynamic(loader, { ssr: false, loading: () => null });

  if (!isDesktop && mobileBehavior === 'hide') {
    return null;
  }

  return (
    <div ref={ref} className={`${className} ${!isDesktop ? fallbackClassName : ''}`}>
      {isDesktop && inView ? <Component /> : null}
    </div>
  );
}

'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OpenSource from '@/components/OpenSource';
import PageIntro from '@/components/PageIntro';
import ScrollProgress from '@/components/ScrollProgress';
import TechnicalArticles from '@/components/TechnicalArticles';
import WhatIBuild from '@/components/WhatIBuild';
import SmoothScroll from '@/components/providers/SmoothScroll';
import { useIsDesktop } from '@/lib/useMediaQuery';

const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navbar />
      <SmoothScroll>
        <PageIntro onDone={() => setIntroDone(true)} />
        <ScrollProgress />
        {isDesktop && introDone && <ParticleField />}
        <main className={`transition-opacity duration-700 ${introDone ? 'opacity-100' : 'opacity-0'}`}>
          <Hero />
          <WhatIBuild />
          <FeaturedProjects />
          <TechnicalArticles />
          <OpenSource />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <ToastContainer position="top-center" theme="dark" />
      </SmoothScroll>
    </>
  );
}

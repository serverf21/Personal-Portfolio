'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from '@/components/About.tsx';
import BackToTop from '@/components/BackToTop';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import PageIntro from '@/components/PageIntro';
import Projects from '@/components/Projects';
import ScrollProgress from '@/components/ScrollProgress';
import Skills from '@/components/Skills';
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
        <CustomCursor />
        <ScrollProgress />
        {isDesktop && introDone && <ParticleField />}
        <main className={`transition-opacity duration-700 ${introDone ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
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

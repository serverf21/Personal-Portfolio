import React, { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components loaded immediately for above-the-fold content
import Nav from './components/Nav';
import Header from './components/Header';
import Banner from './components/Banner';

// Lazy load components below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Work = lazy(() => import('./components/Work'));
const Services = lazy(() => import('./components/Services'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BackToHome = lazy(() => import('./components/BackToHome'));
const Github = lazy(() => import('./components/Github'));

// Loading component for lazy-loaded sections
const SectionLoader: React.FC = () => (
  <div className="h-20 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Nav />
      <div>
        <Header />
        <Banner />
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Work />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
      
      <Suspense fallback={null}>
        <BackToHome />
      </Suspense>
      
      <ToastContainer />
      
      <Suspense fallback={null}>
        <Github />
      </Suspense>
    </div>
  );
};

export default App;

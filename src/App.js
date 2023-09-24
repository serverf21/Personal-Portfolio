import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills'
import Education from './components/Education';
import BackToHome from './components/BackToHome';
import Footer from './components/Footer';
import Github from './components/Github';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const newLocal = <div className='h-[4000px]'></div>;



  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <div>
        <Nav />
        <div className=''>
          <Header />
          <Banner />

          <About />
          <Skills />
          <Work />
          <Services />
          <Education />
          <Contact />
          <Footer />

        </div>
        {/* {Back to Home} */}
        <BackToHome />
        <ToastContainer />
        <Github />
      </div>


    </div>
  );
};

export default App;

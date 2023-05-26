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

const App = () => {
  // const newLocal = <div className='h-[4000px]'></div>;
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Skills />
      <Work />
      <Education />
      <Contact />
      {/* {newLocal} */}
    </div>
  );
};

export default App;

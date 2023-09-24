import React, { useState, useEffect } from 'react';
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

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = {
  display: "block",
  margin: "0 auto",
  // borderColor: "cyan",
  // color: "cyan"
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])



  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {
        loading ?
          <div className='h-[100vh] flex items-center align-middle'>
            <ClimbingBoxLoader

              color="#36d7b7"
              loading={loading}
              cssOverride={override}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          :
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
      }



    </div>
  );
};

export default App;

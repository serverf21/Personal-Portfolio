import React from 'react';
//countup
import CountUp from 'react-countup';
//intsersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//To add link to contact 
import { Link } from 'react-scroll';

// bg-slate-800
// bg-stone-700
//#AA4465
//#3D0814

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  // mix-blend-exclusion
  return (
    <section className='section sm:bottom-2 bg-cyan-950' id="about" ref={ref}>
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row
        lg:items-center h-screen'>
          {/* {img} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="invisible md:flex-1 md:bg-about md:bg-contain md:bg-no-repeat md:h-[550px]
           md:bg-top md:visible">
          </motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className='h2 text-accent text-5xl font-tertiary'>Meet the Developer</h2>
            <h4 className='h4 mb-4'>I'm a software developer with almost 3 years of experience.</h4>

            <p className='text-base font-extralight'>

              My passion lies in crafting innovative solutions using MERN Stack, exploring the intricacies of &nbsp;
              <span className='text-yellow-400'>Blockchain (Smart Contracts and Hyperledgers)</span>, venturing into
              <span className='text-yellow-400'> cross-platform development</span>, and delving into the realms of AI-models, whether it's
              <span className='text-yellow-400 '> designing neural networks </span>
              or seamlessly integrating cutting-edge transformers like
              <span className='text-yellow-400'> openai, Falcon, and Langchain.</span>

              <span className='sm:hidden md:visible'> Currently, I'm building developing projects in Next.js, open-source AI-automation, React.js, and Node.js. Let's collaborate and create something amazing together!</span>

            </p>
            <br />


            {/* {stats} */}
            <div className="flex gap-x-2 lg:gap-x-10 mb-12">

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={33} duration={3} /> : 33}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={3} /> : 100}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Open-Source  <br />
                  Contributions
                </div>
              </div>

              <div className='invisible md:visible'>
                <div className="md:text-[30px] font-semibold text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : 20}
                  +
                </div>
                <div className="font-primary text-xs tracking-[2px] text-gray-500">
                  Technologies <br />
                  Mastered and still learning
                </div>
              </div>

            </div>
            <div className="hidden md:flex md:gap-x-8 md:items-center md:mb-5">
              <Link to="contact" activeClass='active'>
                <button className='btn btn-lg
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                  Say "Hi"! &nbsp; <span className='text-2xl'>🙋🏽‍♂️</span>
                </button>
              </Link>
              <a href="https://drive.google.com/file/d/1izGevUmhfBDRbWRQ6Pd07kV2Q08E7m1g/view?usp=sharing" target="_blank" rel="noreferrer">
                <button className='btn btn-lg text-blue-950
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                  Resume
                </button>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
};

export default About;



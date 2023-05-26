import React from 'react';
//images
import Image from '../assets/avatar.png';
//icons
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Banner = () => {
  return (
    <section className="min-h-[70vh] lg:min-h-[70vh] flex items-center" id='home'>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {text} */}
          <motion.div variants={fadeIn('up', 0.3)}
            initial="hidden" whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center align-middle font-secondary lg:text-left lg:w-4/5 sm:w-full">
            <p className="text-accent/80">Hi, my name is</p>
            <motion.h1 variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[4vh] leading-[0.8] lg:text-[8vh] font-semibold pb-2">
              SARVAGYA <span>SAXENA</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[2vh] lg:text-[4vh] font-secondary uppercase leading-[1]">
              <span className="text-white mr-4">
                I am a
              </span>
              <TypeAnimation sequence={[
                'MERN Stack Developer',
                2000,
                'Blockchain Developer',
                2000,
                'ML/AI Engineer',
                2000,
                'Java Developer',
                2000,
                'Data Scientist',
                2000,
              ]}
                speed={50}
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto text-[1.5vh] lg:text-[3vh] lg:mx-0">Nice to meet you. Please take a look around.</motion.p>
            <motion.div variants={fadeIn('up', 0.3)}
              initial="hidden" whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <div>
                <Link to="contact" activeClass='active'>
                  <button className="btn btn-sm">
                    Contact Me
                  </button>
                </Link>
              </div>
              <Link to="https://drive.google.com/file/d/1LjmvvU28xkNEo4ygLKjxBQul3FNcOkP2/view?usp=sharing">
                <button
                  className="text-white border-2 px-5 py-1 my-2 flex items-center hover:bg-accent">
                  Download Resume
                  <HiArrowNarrowRight className='ml-3' />
                </button>
              </Link>
            </motion.div>
            <div>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
              {/* {Socials} */}
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaHackerrank />
                </a>
              </div>
            </div>
          </motion.div>

          {/* {image} */}
          <motion.div variants={fadeIn('down', 0.5)}
            initial="hidden" whileInView={'show'}

            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]
          mx-auto justify-center">
            <img src={Image} alt='' height="1200" width="400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

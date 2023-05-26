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

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id="about" ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row
        lg:items-center lg:gap-x-20 h-screen'>
          {/* {img} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about sm:bg-about md:bg-about bg-contain bg-no-repeat h-[360px]
          mix-blend-luminosity bg-top">
          </motion.div>
          {/* {text} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <h2 className='h2 text-accent'>About me</h2>
            <h4 className='h4 mb-4'>I'm a software developer with more than 2 years of experience.</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam, numquam repellendus vitae qui corporis voluptates eveniet odio nam, consequuntur modi nemo rerum totam, consequatur blanditiis expedita dignissimos repellat exercitationem!
            </p>
            {/* {stats} */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={31} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Technologies <br />
                  Mastered and still learning
                </div>
              </div>

            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" activeClass='active'>
                <button className='btn btn-lg'>Contact Me</button>
              </Link>
              <button className='btn btn-lg'>Resume</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

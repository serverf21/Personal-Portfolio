import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

//services data
const services = [{
  name: 'MERN Stack Development',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsa quod, quibusdam exercitationem cupiditate eaque at ad voluptas deserunt dicta!',
  link: 'Learn More'
},
{
  name: 'Blockchain Development',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsa quod, quibusdam exercitationem cupiditate eaque at ad voluptas deserunt dicta!',
  link: 'Learn More'
},
{
  name: 'AI/ML Development',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ipsa quod, quibusdam exercitationem cupiditate eaque at ad voluptas deserunt dicta!',
  link: 'Learn More'
}
];

const Services = () => {
  return (
    <section className='section' id="services">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* {text & images} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I am a passionate software developer with over 2.5 years of experience.</h3>
            <button className='btn btn-sm'>See My Work</button>
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* {service list} */}
            <div>
              {services.map((services, index) => {
                //destructure services
                const { name, description, link } = services;
                return <div className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}>
                  <div className='max-w-[400px]'>
                    <h3 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>{name}</h3>
                    <div className='font-secondary leading-tight text-sm'>{description}</div>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex
                    justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#"
                      className="text-gradient text-sm"
                    >{link}</a>
                  </div>
                </div>
              })}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Services;

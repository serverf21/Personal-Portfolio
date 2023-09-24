import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import myImg from '../assets/service.png';
import { Image } from 'react-bootstrap';

//services data
const services = [{
  name: 'ClerkJS - React Auth made easy',
  description: 'Imagine building your React, Next.js, or React Native app, and authentication is a breeze – thanks to ClerkJS. It is like a coding buddy that does all the authentication hassle for you.',
  link: 'https://sarvagya-next-sanity-blog.vercel.app/posts/clerkjs-react-auth-made-easy'
},
{
  name: 'Threads vs Twitter: Let us talk design!',
  description: 'Imagine peeking under the hood of tech giants! Delve into the architecture showdown between the intricate microservices of Twitter and  multimedia-driven design of Threads.',
  link: 'https://sarvagya-next-sanity-blog.vercel.app/posts/threads-vs-twitter'
},
{
  name: 'Unveiling Technological Shifts',
  description: "From Apple's tire industry dominance to revolutionary organ-healing coatings, explore captivating analytical insights as I decode complex discoveries into captivating stories.",
  link: 'https://sarvagya-next-sanity-blog.vercel.app/posts/unveiling-technological-transformations'
}
];

const Services = () => {
  return (
    <section className='section min-h-[90vh]' id="services">
      <div className="container mx-auto align-middle">
        <div className='flex flex-col lg:flex-row'>
          {/* {text & images} */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-bottom bg-no-repeat
          mix-blend-exclusion mb-12 lg:mb-0'>
            <h2 className='h2 text-cyan-400 mb-4 lg:text-5xl'>TechTunes &nbsp; BLOG.</h2>
            <h3 className='text-lg max-w-[455px] mb-8'>Dive into a world of tech and dev insights, alongside thought-provoking analytical reports, all on my self-made blog website.</h3>
            <a href="https://sarvagya-next-sanity-blog.vercel.app/" target="_blank" rel="noreferrer">
              <button className='btn btn-sm
              hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
              transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700'>
                See My Blog
              </button>
            </a>
            <Image src={myImg} alt="name" className='max-w-[25vw]' color='white' />
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* {service list} */}
            <div className='flex flex-col align-middle ml-[5vw]'>
              {services.map((services, index) => {
                //destructure services
                const { name, description, link } = services;
                return <div className="mb-[5vh] md:mb-[2vh] flex bg-gradient-to-r from-slate-900 via-amber-950
                rounded-lg to-gray-900 p-5 shadow-xl shadow-stone-800 transition-all hover:scale-110 duration-300"
                  key={index}>
                  <div className='min-w-[20vw] max-w-[70vw] md:mr-[4vw]'>
                    <h3 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>{name}</h3>
                    <div className='font-thin leading-tight text-sm text-cyan-200'>{description}</div>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={link} className='btn w-9 h-9 mb-[42px] flex
                    justify-center items-center' target="_blank" rel="noreferrer">
                      <BsArrowUpRight />
                    </a>
                    <a href={link}
                      className="text-gradient text-sm"
                      target="_blank" rel="noreferrer"
                    >Learn More</a>
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

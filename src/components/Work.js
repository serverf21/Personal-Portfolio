import React from 'react';
//motion
import { motion } from 'framer-motion';
//variant 
import { fadeIn } from '../variants';
//icons
import { FaCode, FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaMobileAlt } from 'react-icons/fa';
import { SiNextdotjs, SiBlockchaindotcom, SiTensorflow } from 'react-icons/si';
//img
import blog from '../assets/projects/blog.png';
import dsocial from '../assets/projects/dsocial.png';
import food from '../assets/projects/food_delivery.png';
import race from '../assets/projects/racing.png';
import selfdrive from '../assets/projects/self_driving.png';
import threads from '../assets/projects/threads.png';
import trello from '../assets/projects/trello.jpg';
import webrtc from '../assets/projects/webrtc.png';
// Project data with fallback icons
const projectsData = [
  {
    id: 'racing',
    title: 'Crazy Racing',
    description: 'React.js | Three.js | Vite',
    image: race,
    fallbackIcon: FaReact,
    url: 'https://crazy-racing-react.vercel.app/',
    category: 'web'
  },
  {
    id: 'webrtc',
    title: 'WebRTC VideoChat',
    description: 'SRTP | UDP | Socket.io | Express.js | React.js',
    image: webrtc,
    fallbackIcon: FaNodeJs,
    url: 'https://github.com/serverf21/WebRTC-VideoChat-WebApp',
    category: 'web'
  },
  {
    id: 'trello',
    title: 'AI-based Project Manager',
    description: 'Next.js | Appwrite | ReactBeautifulDND | GPT',
    image: trello,
    fallbackIcon: SiNextdotjs,
    url: 'https://trello-appwrite-next-clone-serverf21.vercel.app/',
    category: 'web'
  },
  {
    id: 'threads',
    title: 'Social Media App (Threads Clone)',
    description: 'Next.js | Clerk.js | RadixUI | Tailwind',
    image: threads,
    fallbackIcon: FaReact,
    url: 'https://threads-twitter-clone.vercel.app/',
    category: 'web'
  },
  {
    id: 'blog',
    title: 'TechTunes Blog',
    description: 'Next.js | Sanity | Tailwind | Typescript',
    image: blog,
    fallbackIcon: SiNextdotjs,
    url: 'https://sarvagya-next-sanity-blog.vercel.app/',
    category: 'web'
  },
  {
    id: 'dsocial',
    title: 'DeSocial on Polygon',
    description: 'React.js | ChakraUI | GraphQL | Polygon',
    image: dsocial,
    fallbackIcon: SiBlockchaindotcom,
    url: 'https://github.com/serverf21/DeSocial-Blockchain',
    category: 'blockchain'
  },
  {
    id: 'food',
    title: 'BHOJ - Food Delivery App',
    description: 'React Native | Sanity | Tailwind | Redux',
    image: food,
    fallbackIcon: FaMobileAlt,
    url: 'https://github.com/serverf21/bhoj-food-delivery-app',
    category: 'mobile'
  },
  {
    id: 'selfdrive',
    title: 'Self-Driving Car - CNN Model',
    description: 'OpenCV | Keras | Tensorflow | Python',
    image: selfdrive,
    fallbackIcon: SiTensorflow,
    url: 'https://github.com/serverf21/Self-Driving-DL-CNN-Model',
    category: 'ai'
  }
];

// Project Card Component with fallback
const ProjectCard = ({ project, className = "" }) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const FallbackIcon = project.fallbackIcon;
  
  return (
    <div className={`group relative overflow-hidden border-2 border-white/50 rounded-lg backdrop-blur-sm bg-white/5 ${className}`}>
      <a href={project.url} target="_blank" rel="noreferrer">
        {/* Overlay */}
        <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
        
        {/* Image or Fallback Icon */}
        <div className="relative w-full h-full flex items-center justify-center min-h-[200px]">
          {!imageError ? (
            <>
              <img
                className={`scale-125 group-hover:scale-150 transition-all duration-500 object-cover w-full h-full ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                src={project.image}
                alt={project.title}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-cyan-400 group-hover:text-white transition-colors duration-300">
              <FallbackIcon size={60} />
              <span className="text-xs mt-2 opacity-60">Preview Unavailable</span>
            </div>
          )}
        </div>

        <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
          {/* Title */}
          <div className="text-gradient md:text-xl text-sm font-semibold">
            {project.title}
          </div>
          {/* Description */}
          <div className='invisible lg:visible md:text-sm text-white text-sm opacity-90'>
            {project.description}
          </div>
          
          {/* External link icon */}
          <div className="invisible lg:visible lg:group-hover:visible absolute top-2 right-2">
            <FaExternalLinkAlt className="text-cyan-400 text-sm opacity-80" />
          </div>
        </div>
      </a>
    </div>
  );
};

// Work Experience
const Work = () => {
  return (
    <section className='section bg-cyan-950' id="work">
      <div className="container mx-auto align-middle">
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-10 align-middle m-5 lg:m-0'>
          {/* Left-text and Left-Image */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6 mb-2 lg:mb-0'>
            {/* {text} */}
            <div>
              <h2 className='h2 leading-tight text-cyan-500 lg:text-5xl font-tertiary'>
                My Latest <br />
                Projects
              </h2>
              <p className="max-w-lg mb-10 text-sm font-semibold">
                <span className='text-xl'>I learn the fun way — by building cool stuff!</span>
                <br /><br />
                From MERN Stack to NEXT.js, React Native to blockchain, and CNN models to cutting-edge tools, my projects span the tech spectrum.

                From video chats and social apps to blockchain health management and AI automation, I'm on a mission to solve real-world problems.
              </p>
              <a href="https://github.com/serverf21" target="_blank" rel="noreferrer">
                <button className="btn btn-sm mb-16
                hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
                  View all projects
                </button>
              </a>
              <p className='text-cyan-500 text-base text-center invisible lg:visible'>
                Hover over the blocks to know more!
              </p>
            </div>
            {/* {image} */}
            <div className='flex flex-row space-x-3 h-full'>
              {/* Left Image 1 */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://crazy-racing-react.vercel.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={race} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      Crazy Racing
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>React.js | Three.js | Vite</div>
                  </div>
                </a>

              </div>
              {/* Left Image 2 */}
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://github.com/serverf21/WebRTC-VideoChat-WebApp" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={webrtc} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      WebRTC VideoChat
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>SRTP | UDP | Socket.io | Express.js | React.js</div>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Image-top-right */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* Right image 1 */}
            <div className='flex flex-row space-x-3 h-full'>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg cursor-pointer">
                <a href="https://trello-appwrite-next-clone-serverf21.vercel.app/" target="_blank" rel="noreferrer" className='w-full h-full'>
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full
                  absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500 object-cover "
                    src={trello} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      AI-based Project Manager
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>Next.js | Appwrite | ReactBeautifulDND | GPT</div>
                  </div>
                </a>

              </div>

              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://threads-twitter-clone.vercel.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={threads} alt="" />

                  <div className='absolute -bottom-5 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      Social Media App (Threads Clone)
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>Next.js | Clerk.js | RadixUI | Tailwind</div>
                  </div>
                </a>

              </div>
            </div>
            {/* Right image 2 */}
            <div className='flex flex-row space-x-3 h-full'>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://sarvagya-next-sanity-blog.vercel.app/" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={blog} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      TechTunes Blog
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>Next.js | Sanity | Tailwind | Typescript</div>
                  </div>
                </a>

              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://github.com/serverf21/DeSocial-Blockchain" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={dsocial} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      DeSocial on Polygon
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>React.js | ChakraUI | GraphQL | Polygon</div>
                  </div>
                </a>

              </div>
            </div>
            {/* Right-down */}
            <div className='flex flex-row space-x-3 h-full'>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://github.com/serverf21/bhoj-food-delivery-app" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 transition-all duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={food} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      BHOJ - Food Delivery App
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>React Native | Sanity | Tailwind | Redux</div>
                  </div>
                </a>

              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-lg">
                <a href="https://github.com/serverf21/Self-Driving-DL-CNN-Model" target="_blank" rel="noreferrer">
                  {/* Overlay */}
                  <div className="bg-black/80 lg:bg-transparent lg:group-hover:bg-black/80 w-full h-full absolute z-30 lg:transition-all lg:duration-300"></div>
                  {/* img */}
                  <img
                    className="scale-125 group-hover:scale-150 transition-all duration-500"
                    src={selfdrive} alt="" />

                  <div className='absolute -bottom-2 left-1 lg:-bottom-full lg:left-4 lg:group-hover:bottom-4 lg:transition-all lg:duration-500 z-40'>
                    {/* pretitle */}
                    <div className="text-gradient md:text-xl text-sm">
                      Self-Driving Car - CNN Model
                    </div>
                    {/* title */}
                    <div className='invisible lg:visible md:text-sm text-white text-sm'>OpenCV | Keras | Tensorflow | Python</div>
                  </div>
                </a>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;

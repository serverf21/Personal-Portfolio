//tech I have worked on
import { React } from "react";
import '../index.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import SkillBlock from "./SkillBlock";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di'
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoReact } from 'react-icons/bi'
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';
import {
    SiTypescript, SiExpress, SiDjango, SiPython,
    SiSolidity, SiHyperledger, SiTensorflow, SiKeras, SiOpenai, SiMongodb
} from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';

// Remove bars and put circular icons divided by sections

const Skills = () => {

    return (
        <section className='section min-h-fit top-0 pt-10' id="skills">
            <div className="container mx-auto align-middle">
                <div className='gap-x-5 gap-y-6 md:gap-y-2 align-middle'>
                    {/* <!--   *******  Main Heading Starts  *******   --> */}
                    <motion.div
                        variants={fadeIn('top', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="container main-title flex text-center justify-center flex-col mb-5">

                        <h1 className="h1 text-cyan-500 text-5xl font-primary">MY SKILLS</h1>

                        <p>Elevating Skills, One Tech at a Time.</p>
                    </motion.div>

                    <div className="main-container flex justify-center flex-col lg:flex-row md:flex-col top-0">
                        {/* Left Container */}
                        <motion.div
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top bg-gray-900 border rounded-xl">

                            <div className="md:max-w-[25vw] md:min-w-[20vw] mx-5">
                                <h1 className="title-text">Web Development</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <AiFillHtml5 size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <DiCss3 size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoTailwindCss size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoJavascript size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <BiLogoReact size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <TbBrandNextjs size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiTypescript size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiExpress size={60} color="primary" />

                                    </div>

                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiDjango size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiPython size={60} color="primary" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <TbBrandRedux size={60} color="primary" />

                                    </div>



                                </div>

                            </div>


                        </motion.div>

                        {/* Mid Container */}
                        <div className="sm:mx-auto flex justify-center flex-col align-middle">

                            <motion.div
                                variants={fadeIn('up', 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.3 }}
                                className="md:max-w-[25vw] md:min-w-[20vw] mx-2">
                                <h1 className="title-text">Blockchain Development</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiSolidity size={60} color="gray" />


                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <FaEthereum size={60} color="gray" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
                                            alt="Metamask"
                                            className="hover:text-accent"
                                        />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer">
                                        {/* Overlay */}
                                        <SiHyperledger size={60} color="primary" />

                                    </div>


                                </div>

                            </motion.div>

                            <motion.div
                                variants={fadeIn('down', 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.5 }}
                                className="md:max-w-[25vw] md:min-w-[20vw] mx-2">
                                <h1 className="title-text">Artificial Intelligence</h1>
                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiTensorflow size={60} color="yellow" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiKeras size={60} color="red" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiOpenai size={60} color="#00A67E" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[6vh] w-[6vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://static-00.iconduck.com/assets.00/hugging-face-emoji-507x512-v7kpw0rw.png"
                                            alt="Hugging Face" />

                                    </div>
                                    <div className="group relative overflow-hidden rounded-xl h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <SiPython size={60} color="primary" /> */}
                                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png"
                                            alt="Python" />

                                    </div>

                                </div>
                            </motion.div>
                        </div>

                        {/* Right Container */}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="sm:mx-auto flex justify-center flex-col align-top">

                            <div className="md:max-w-[25vw] md:min-w-[20vw] mx-5">
                                <h1 className="title-text">Cloud/Databases</h1>

                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
                                            alt="Firebase" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[6vh] w-[6vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        <SiMongodb size={60} color="green" />


                                    </div>

                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://static-00.iconduck.com/assets.00/sanity-icon-2048x413-5j9wc7c7.png"
                                            alt="Sanity" />

                                    </div>

                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png"
                                            alt="AWS" />

                                    </div>


                                </div>

                            </div>

                            <div className="md:max-w-[25vw] md:min-w-[20vw] mx-5">
                                <h1 className="title-text">DevOps</h1>
                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
                                            alt="Docker" />

                                    </div>
                                    <div className="group relative overflow-hidden h-[8vh] w-[8vh]
                                    mx-3 my-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://upload.wikimedia.org/wikipedia/labs/thumb/b/ba/Kubernetes-icon-color.svg/2110px-Kubernetes-icon-color.svg.png"
                                            alt="Kubernetes" />

                                    </div>



                                </div>
                            </div>

                            <div className="md:max-w-[25vw] md:min-w-[20vw] mx-5">
                                <h1 className="title-text">Mobile Development</h1>
                                <div className="flex flex-row flex-wrap justify-center">
                                    <div className="group relative overflow-hidden h-[13vh] w-[13vh]
                                    mx-3 flex justify-center items-center cursor-pointer hover:text-accent">
                                        {/* Overlay */}
                                        {/* <AiFillHtml5 size={60} color="primary" /> */}
                                        <img src="https://dgxlearning.com/wp-content/uploads/2022/03/React-Native_logo.png"
                                            alt="React Native" className="h-18 w-15" />

                                    </div>




                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Skills;

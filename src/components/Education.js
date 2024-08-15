import { React } from "react";
import '../index.css';
//motion
import { motion } from 'framer-motion';
//variant 
import { fadeIn } from '../variants';

const Education = () => {

    return (
        <section className="section" id="education">
            <div className="container mx-auto">
                <div className='gap-x-40 gap-y-10 mb-6 lg:mb-20 lg:p-5'>
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        {/* Both education and experience */}
                        <div className="education-row
            flex flex-wrap gap-[5rem] m-10">
                            <div className="column-row flex-1 lg:mr-10">
                                <h2 className="h2 text-cyan-500 title-[2.5rem] m-[1rem] mb-[2vh]">Education</h2>
                                <div className="education-box border-l-2 border-opacity-40 border-l-cyan-800">
                                    {/* Number 1 - Education */}
                                    <motion.div
                                        variants={fadeIn('left', 0.2)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2 font-light">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                2022-Present
                                            </div>
                                            <h4 className="h3 mb-0 text-xl">MERN Stack Bootcamp</h4>
                                            <p>Coding Ninjas</p>
                                            {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
                                        </div>
                                    </motion.div>

                                    {/* Number 2 - Education */}
                                    <motion.div
                                        variants={fadeIn('left', 0.4)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                2016-2020
                                            </div>
                                            <h4 className="h3 mb-0 text-xl">Bachelor of Technology </h4>
                                            <h6>National Institute of Technology Silchar</h6>
                                            {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
                                        </div>
                                    </motion.div>
                                    {/* Number 3 - Education */}
                                    <motion.div
                                        variants={fadeIn('left', 0.6)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                HS & SS
                                            </div>
                                            <h3 className="h3 mb-0 text-xl">B.B.L. Public School</h3>
                                            {/* <p className="text-sm">Higher Secondary and Senior Secondary</p> */}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="column-row flex-1 lg:ml-10">
                                <h2 className="h2 text-cyan-500 title-[2.5rem] m-[1rem] mb-[2vh]">Experience</h2>
                                <div className="education-box border-l-2 border-opacity-40 border-l-cyan-800 mr-5">
                                    {/* Experience No. 1 */}
                                    <motion.div
                                        variants={fadeIn('right', 0.3)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                December 2023 - Present
                                            </div>
                                            <h3 className="h3 mb-0 text-xl">Full-Stack Developer</h3>
                                            <p>(Deployed at Walmart)</p>
                                            <h4>CA-One tech cloud</h4>
                                            {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
                                        </div>
                                    </motion.div>

                                    {/* Experience No. 2 */}
                                    <motion.div
                                        variants={fadeIn('right', 0.3)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                June 2022-July 2023
                                            </div>
                                            <h3 className="h3 mb-0 text-xl">Full-Stack Developer</h3>
                                            <p>(MERN & Blockchain)</p>
                                            <h4>Sears Global Technologies Limited</h4>
                                            {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
                                        </div>
                                    </motion.div>

                                    {/* Number 2 - Experience */}
                                    <motion.div
                                        variants={fadeIn('right', 0.5)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="education-content relative pl-[2rem] my-[1vh]">
                                        <div className="content relative p-[1rem] bg-gray-900 shadow-slate-800 shadow-sm bg-opacity-50 rounded-lg mb-2">
                                            <div className="year flex flex-row items-center text-sm text-gradient font-tertiary">
                                                <img className="max-h-[30px] pr-[1rem]"
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg=="
                                                    alt=""
                                                />
                                                2020-2022
                                            </div>
                                            <h3 className="h3 mb-0 text-xl">Technology Consultant</h3>
                                            <p>(Deep Learning, AI-Consulting)</p>
                                            <p>GreyB Research Private Limited</p>
                                            {/* <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p> */}
                                        </div>
                                    </motion.div>

                                </div>
                            </div>

                        </div>

                    </div>
                    {/* Certifications */}

                    <div className="flex align-middle text-center justify-center">
                        <a href="https://drive.google.com/drive/folders/1rTvJVgOL244PGyhgbAc3Usq7DC93G_Kn?usp=sharing"
                            target="_blank" rel="noreferrer">
                            <button className="btn btn-sm
                            hover:text-blue-950 hover:shadow-[inset_25rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
                            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
                                <div className="px-10 md:text-lg">
                                    See my Certifications
                                </div>
                            </button>
                        </a>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Education;

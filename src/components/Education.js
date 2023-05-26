import { React } from "react";
import '../index.css';
//motion
import { motion } from 'framer-motion';
//variant 
import { fadeIn } from '../variants';

const Education = () => {

    return (
        <section className="education flex justify-center items-center flex-col min-h-auto pb-[5rem]" id="education">
            {/* Both education and experience */}
            <div className="education-row
            flex flex-wrap gap-[5rem] m-10">
                <div className="column-row flex-1">
                    <h2 className="h2 text-accent title-[2.5rem] m-[1rem]">Education</h2>
                    <div className="education-box border-l-2 border-l-accent">
                        <motion.div
                            variants={fadeIn('left', 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="education-content relative pl-[2rem]">
                            <div className="content relative p-[1rem] border-2 border-white rounded-xl mb-2">
                                <div className="year flex flex-row items-center text-sm text-gradient">
                                    <img className="max-h-[30px] pr-[1rem]"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg==" />
                                    2022-Present
                                </div>
                                <h3 className="h3 mb-0 text-xl">Coding Ninjas - MERN Stack Program</h3>
                                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p>
                            </div>
                        </motion.div>

                        {/* Number 2 - Education */}
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="education-content relative pl-[2rem]">
                            <div className="content relative p-[1rem] border-2 border-white rounded-xl mb-2">
                                <div className="year flex flex-row items-center text-sm text-gradient">
                                    <img className="max-h-[30px] pr-[1rem]"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg==" />
                                    2016-2020
                                </div>
                                <h3 className="h3 mb-0 text-xl">Bachelor of Technology - National Institute of Technology Silchar</h3>
                                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p>
                            </div>
                        </motion.div>
                        {/* Number 3 - Education */}
                        <motion.div
                            variants={fadeIn('left', 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="education-content relative pl-[2rem]">
                            <div className="content relative p-[1rem] border-2 border-white rounded-xl mb-2">
                                <div className="year flex flex-row items-center text-sm text-gradient">
                                    <img className="max-h-[30px] pr-[1rem]"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg==" />
                                    2016-2020
                                </div>
                                <h3 className="h3 mb-0 text-xl">B.B.L. Public School</h3>
                                <p className="text-sm">Higher Secondary and Senior Secondary</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Experience */}
                <div className="column-row flex-1">
                    <h2 className="h2 text-accent title-[2.5rem] m-[1rem]">Experience</h2>
                    <div className="education-box border-l-2 border-l-accent mr-5">
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="education-content relative pl-[2rem]">
                            <div className="content relative p-[1rem] border-2 border-white rounded-xl mb-2">
                                <div className="year flex flex-row items-center text-sm text-gradient">
                                    <img className="max-h-[30px] pr-[1rem]"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg==" />
                                    June 2022-Present
                                </div>
                                <h3 className="h3 mb-0 text-xl">Full-Stack Developer</h3>
                                <p>Sears Global Technologies Limited</p>
                                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p>
                            </div>
                        </motion.div>

                        {/* Number 2 - Experience */}
                        <motion.div
                            variants={fadeIn('right', 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className="education-content relative pl-[2rem]">
                            <div className="content relative p-[1rem] border-2 border-white rounded-xl mb-2">
                                <div className="year flex flex-row items-center text-sm text-gradient">
                                    <img className="max-h-[30px] pr-[1rem]"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWcENgzAMND8yRjYpk7WdrGzCGOTXKqhINIIY4wgT9fJCIo59d+Ei4oYqH03l9RMAWCt4WIGxHd7L4l3worW08XNuUdJlwdoCtPEAoGVQG79LgbEdbkR0/06Oz2ePpwv+kUua/QZSls6ufpGvc8H3a/k3AYztEJHP7BvWPqXuXfCdFMCPTRojqB4AbZ0zuS10JQX0AKQnrXbL7bXZ3QoAgFASKHChQ2zSDi4k3MLFp0OB4pQKF4QCKWEpI5xvS99z+dgfGs5GASC5xZASBgWEJqKeDhdSU6hcAApwviz1ec6GuXxwIY5B7XsowJ2MSlMRh8OFxJQVDvhLBV5EZNETWNXuiAJXArDZ6MhdLUb2IwjzkbvWZLuUho2OuSMT2V/tzkRmWQDm9DMFAIC1QtUr8AE8WCdAvpj18wAAAABJRU5ErkJggg==" />
                                    2020-2022
                                </div>
                                <h3 className="h3 mb-0 text-xl">Developer Analyst (Data Science)</h3>
                                <p>GreyB Research Private Limited</p>
                                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis magni recusandae officia dicta praesentium.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

//tech I have worked on
import { React } from "react";
import '../index.css';

const Skills = () => {

    return (
        <section className='skills min-h-screen p-5' id="skills">
            {/* <!--   *******  Main Heading Starts  *******   --> */}
            <div className="main-title  flex text-center justify-center flex-col">
                <h1 className="h1 text-accent text-5xl">My Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="main-container flex">
                {/* Left Container */}
                <div className="container">

                    <div className="container">
                        <h1 className="title-text">Web Development</h1>

                        <div className="skill-box">
                            <span className="title">HTML</span>
                            <div className="skill-bar">
                                <span className="skill-per html">
                                    <span className="tooltip">95%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">CSS</span>
                            <div className="skill-bar">
                                <span className="skill-per css">
                                    <span className="tooltip">80%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">JavaScript</span>
                            <div className="skill-bar">
                                <span className="skill-per javascript">
                                    <span className="tooltip">60%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">NodeJS</span>
                            <div className="skill-bar">
                                <span className="skill-per nodejs">
                                    <span className="tooltip">40%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">ReactJS</span>
                            <div className="skill-bar">
                                <span className="skill-per reactjs">
                                    <span className="tooltip">70%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">ExpressJS</span>
                            <div className="skill-bar">
                                <span className="skill-per expressjs">
                                    <span className="tooltip">75%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right Container */}
                <div className="container">

                    <div className="container">
                        <h1 className="title-text">Miscellaneous Development</h1>

                        <div className="skill-box">
                            <span className="title">Smart Contract (Blockchain)</span>
                            <div className="skill-bar">
                                <span className="skill-per html">
                                    <span className="tooltip">95%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Java Development</span>
                            <div className="skill-bar">
                                <span className="skill-per css">
                                    <span className="tooltip">80%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">ML/AI Model Development</span>
                            <div className="skill-bar">
                                <span className="skill-per javascript">
                                    <span className="tooltip">60%</span>
                                </span>
                            </div>
                        </div>
                        <div className="skill-box">
                            <span className="title">Deep Learning</span>
                            <div className="skill-bar">
                                <span className="skill-per nodejs">
                                    <span className="tooltip">40%</span>
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Skills;

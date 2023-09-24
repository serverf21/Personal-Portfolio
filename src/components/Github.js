import React from 'react';


// Icon
import { AiFillGithub, AiFillStar } from 'react-icons/ai'



const Github = () => {
    return (
        <nav className="fixed mb-[2vh] mr-[96vw] ml-[2vw] lg:bottom-3 overflow-hidden z-50">
            <div className="container cursor-pointer hover:text-accent">

                <a href="https://github.com/serverf21/Personal-Portfolio" target="_blank" rel="noreferrer">
                    <div className='d-none d-sm-block border-2 border-white rounded-lg p-3 flex flex-row
                    bg-gray-800 space-x-3'>

                        <AiFillGithub size={20} />
                        <AiFillStar size={20} />

                    </div>
                </a>

            </div>
        </nav>
    );
};


export default Github;

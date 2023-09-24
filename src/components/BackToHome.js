import React from 'react';

//link
import { Link } from 'react-scroll';
// Icon
import { BsFillArrowUpCircleFill } from 'react-icons/bs'



const BackToHome = () => {
    return (
        <div className="fixed mb-[2vh] ml-[92vw] mr-[4vw] lg:bottom-3 overflow-hidden z-50">
            <div className="container cursor-pointer hover:text-accent">

                <Link to="header"
                    smooth={true}
                    spy={true}
                    offset={-200}
                > <BsFillArrowUpCircleFill size={40} /></Link>

            </div>
        </div>
    );
};


export default BackToHome;

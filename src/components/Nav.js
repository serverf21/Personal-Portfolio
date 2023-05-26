import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi';
import "../index.css";

//link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* {nav inner} */}
        <div className="w-full bg-black/20 h-[13vh] backdrop-blur-2xl rounded-full max-w-[500px] mx-auto
        px-5 flex justify-between items-center text-2xl text-white/50" id="scrollspy1">
          <Link
            to="home"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          <Link
            to="skills"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <GiSkills />
          </Link>
          <Link
            to="work"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          <Link
            to="education"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[50px] h-[50px] flex items-center justify-center">
            <FaUserGraduate />
          </Link>
          <Link
            to="contact"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

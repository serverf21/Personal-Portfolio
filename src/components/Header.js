import React from 'react';
import { Link } from 'react-scroll';

//images
import Logo from '../assets/sign.png'
import Image from 'react-bootstrap/Image'

const Header = () => {
  return (
    <header className="py-5" id="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {button} */}
          <Link to="contact" activeClass='active'>
            <button className="btn ml-[4vw] btn-sm md:btn-lg
            hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
              Work with me
            </button>
          </Link>

          <Link to="about"
            activeClass='active'>
            <div className="h-[10vh] w-[20vh] invisible md:visible md:ml-[50vw] hover:scale-125 duration-300 cursor-pointer">

              <Image src={Logo} alt="name" className='max-w-[80px] rounded-full ' color='white' />
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;

//  sign_img_color
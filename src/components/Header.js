import React from 'react';
//images
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="h-[10vh] w-[20vh]">
            <a href="#">
              <img src={Logo} alt="name" />
            </a>
          </div>
          {/* {button} */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-scroll';

const CustomNavbar = ({scrollToTop}) => {
  return (
    <div className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-[#DFD0B8] shadow-sm transition-all duration-300 ease-in-out" style={{borderBottomWidth: '1px'}}>
      <div className='flex flex-row justify-between items-center px-5 py-3 w-full'>

        {/* Left Side Word or Logo */}
        <div className="text-xl sm:text-3xl font-bold uppercase cursor-pointer" style={{ color: '#DFD0B8' }} onClick={scrollToTop}>
            Ar
            <span style={{ color: '#00c04b' }}>O</span>
            h
            <span style={{ color: '#00c04b' }}>N</span>.
        </div>

        {/* Right Side Links */}
        <div className='flex flex-row items-center gap-x-4'>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="nav-link nav-option text-md sm:text-xl p-1 text-[#DFD0B8]"
            >
                About
            </Link>
            <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link nav-option text-md sm:text-xl p-1 text-[#DFD0B8]"
            >
                Projects
            </Link>
            <Link
                to="hire-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link nav-option text-md sm:text-xl p-1 text-[#DFD0B8]"
            >
                Contact
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;

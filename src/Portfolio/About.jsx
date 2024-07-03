import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function About() {
  return (
    <section id="about" className=' flex flex-col items-center p-5 xl:p-0 min-h-full md:min-h-screen'>
      <h1 className='text-5xl sm:text-7xl uppercase hover' style={{ color: '#DFD0B8' }}>About</h1>
      <div className='flex text-center p-5'>
        <p className='text-4xl sm:text-5xl' style={{ color: '#948979' }}>
          I'm enthusiastic about venturing into web & mobile application development, with a strong desire to bring creative ideas to life. I'm motivated by the prospect of turning concepts into meaningful projects.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row w-full h-full justify-around items-center'>
        {/* Smooth scroll navigation links */}
        <Link
          to="exp"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as per your layout
          duration={500}
          className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'
          style={{ textDecoration: 'none', color: '#153448' }}
        >
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>1</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Year(s) of experience</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </Link>
        <Link
          to="master"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as per your layout
          duration={500}
          className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 my-5 sm:my-0 nav-bar nav-option'
          style={{ textDecoration: 'none', color: '#153448' }}
        >
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>5</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Technology mastered</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as per your layout
          duration={500}
          className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'
          style={{ textDecoration: 'none', color: '#153448' }}
        >
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>3</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Project completed</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </Link>
      </div>
    </section>
  );
}

export default About;

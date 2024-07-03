import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import fb from '../assets/facebook.png';
import gh from '../assets/github.png';
import ln from '../assets/linkedin.png';
import tl from '../assets/telegram.png';

function About() {
  return (
    <div className='relative flex flex-col items-center p-5 xl:p-0 min-h-screen'>
      <h1 className='text-5xl sm:text-7xl uppercase hover' style={{ color: '#DFD0B8' }}>About</h1>
      <div className='flex text-center p-5'>
        <p className='text-4xl sm:text-5xl' style={{ color: '#948979' }}>
          I'm enthusiastic about venturing into web & mobile application development, with a strong desire to bring creative ideas to life. I'm motivated by the prospect of turning concepts into meaningful projects.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row w-full h-full justify-around items-center'>
        <a href="#exp" className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'>
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>1</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Year(s) of experience</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </a>
        <a href="#master" className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 my-5 sm:my-0 nav-bar nav-option'>
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>5</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Technology mastered</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </a>
        <a href="#proj" className='nav-link flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'>
          <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>3</h1>
          <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Project completed</p>
          <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
        </a>
      </div>
      {/* <div className='absolute right-0 bottom-0 flex flex-row justify-end items-end p-2'>
        <img src={fb} alt="" className="h-12 w-12 item-div" />
        <img src={gh} alt="" className="h-12 w-12 ml-5 item-div" />
        <img src={ln} alt="" className="h-12 w-12 ml-5 item-div" />
        <img src={tl} alt="" className="h-12 w-12 ml-5 item-div" />
      </div> */}
    </div>
  );
}

export default About;

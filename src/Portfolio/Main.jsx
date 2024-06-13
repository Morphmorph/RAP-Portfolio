import React from 'react';
import img from '../assets/img.jpg';
import downloads from '../assets/downloads.png';
import fb from '../assets/facebook.png';
import gh from '../assets/github.png';
import ln from '../assets/linkedin.png';
import tl from '../assets/telegram.png';

function Main() {
  return (
    
    <div className='flex justify-center items-center p-5 xl:p-0 h-screen'>
      <div className='flex flex-col xl:flex-row justify-center items-center'>
        <div className='flex flex-col'>
        <div className='flex flex-col sm:flex-row '>
          <p className='text-5xl' style={{ color: '#DFD0B8' }}>Hi, it's</p>
          <p className='ml-0 sm:ml-2 text-5xl capitalize' style={{ color: '#948979'}}>Rickne Arohn Pacana</p>
        </div>
        <div className='flex flex-col 1sm:flex-row py-2'>
          <p className='text-4xl' style={{ color: '#DFD0B8' }}>I'm a</p>
          <p className='ml-0 1sm:ml-2 text-4xl text capitalize' style={{ color: '#948979'}}>Full stack developer</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center md:justify-start items-center mt-2'>
        <div className='border-2 py-2 px-3 rounded-full flex items-center justify-center' style={{ borderColor: '#DFD0B8'}}>
            <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Download CV</p> 
            <img src={downloads} alt="" className="h-6 w-6 ml-2"/>
        </div>
        <div className='flex flex-row ml-0 sm:ml-5 mt-5 sm:mt-0'>
        <img src={fb} alt="" className="h-12 w-12 "/>
        <img src={gh} alt="" className="h-12 w-12 ml-5"/>
        <img src={ln} alt="" className="h-12 w-12 ml-5"/>
        <img src={tl} alt="" className="h-12 w-12 ml-5"/>
        </div>
        </div>
        {/* <div className='flex flex-col 1sm:flex-row h-24 mt-5 w-full nav-bar'>
          
        </div> */}
        </div>
        <img src={img} alt="" className="z-10 h-2/3 w-2/3 md:h-1/2 md:w-1/2 xl:h-1/3 xl:w-1/3 rounded-full ml-0 xl:ml-20 mt-10 xl:mt-0 border-8 p-2 border-dashed" style={{ borderColor: '#DFD0B8'}}/>
      
      </div>
      </div>
    
    
  );
}

export default Main;

import React from 'react'
import fb from '../assets/facebook.png';
import gh from '../assets/github.png';
import ln from '../assets/linkedin.png';
import tl from '../assets/telegram.png';

function Footer() {
  return (
    <div className='flex flex-col justify-center w-full items-center p-5 xl:p-0 min-h-full' style={{backgroundColor: '#3C5B6F'}}>
        <h1 className='text-xl md:text-2xl uppercase' style={{color: '#DFD0B8'}}>© 2024 Portfolio</h1>
        <h1 className='text-xl md:text-2xl uppercase' style={{color: '#DFD0B8'}}>All rights reserved</h1>
    <div className='flex flex-row justify-center items-center p-2'>
        <img src={fb} alt="" className="h-12 w-12 item-div" />
        <img src={gh} alt="" className="h-12 w-12 ml-5 item-div" />
        <img src={ln} alt="" className="h-12 w-12 ml-5 item-div" />
        <img src={tl} alt="" className="h-12 w-12 ml-5 item-div" />
      </div>
    </div>
  )
}

export default Footer
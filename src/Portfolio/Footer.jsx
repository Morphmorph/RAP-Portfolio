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
    <a
                  href="https://www.facebook.com/ricknearohn.pacana.3/" // Replace with your Facebook profile link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="Facebook" className="h-12 w-12 item-div" />
                </a>
                <a
                  href="https://github.com/Morphmorph" // Replace with your GitHub profile link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gh} alt="GitHub" className="h-12 w-12 ml-5 item-div" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rickne-arohn-pacana-948b67254/" // Replace with your LinkedIn profile link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ln} alt="LinkedIn" className="h-12 w-12 ml-5 item-div" />
                </a>
                <a
                  href="https://t.me/ricknearohn" // Replace with your Telegram profile link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tl} alt="Telegram" className="h-12 w-12 ml-5 item-div" />
                </a>
      </div>
    </div>
  )
}

export default Footer
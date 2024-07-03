import React from 'react'
import img from '../assets/html.png';
import img2 from '../assets/css-3.png';
import img3 from '../assets/physics.png';
import img4 from '../assets/python.png';
import img5 from '../assets/javascript.png';

function Technology() {
  return (
    <section id="master" className='relative flex flex-col items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'>
    <h1 className='text-5xl sm:text-7xl uppercase hover' style={{color: '#DFD0B8'}}>technologies</h1>
    <div className='flex flex-wrap justify-center w-full mt-10 p-2 Style' >
    <img src={img} alt="" className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" />
    <img src={img2} alt="" className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" />
    <img src={img3} alt="" className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" />
    <img src={img4} alt="" className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" />
    <img src={img5} alt="" className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" />
    </div>
  </section>
  )
}

export default Technology
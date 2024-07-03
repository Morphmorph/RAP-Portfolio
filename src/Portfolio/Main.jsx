import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../assets/img.jpg';
import downloads from '../assets/downloads.png';
import fb from '../assets/facebook.png';
import gh from '../assets/github.png';
import ln from '../assets/linkedin.png';
import tl from '../assets/telegram.png';
import About from './About';
import Projects from './Projects';
import Technology from './Technology';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function Main() {
  const hireMeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'auto' }}>
      <div className='flex justify-center items-center p-5 xl:p-0 min-h-screen' id="home">
        <div className='flex flex-col xl:flex-row justify-center items-center w-full'>
          <div className='flex flex-col w-full xl:w-1/2'>
            <div className='flex flex-col sm:flex-row'>
              <p className='text-5xl' style={{ color: '#DFD0B8' }}>Hi, it's</p>
              <div className='ml-0 sm:ml-2 text-5xl capitalize' style={{ color: '#948979'}}>
                <TypeAnimation
                  sequence={['Rickne Arohn Pacana', 1000]}
                  wrapper="span"
                  speed={10}
                  style={{ display: 'inline-block' }}
                  repeat={0}
                />
              </div>
            </div>
            <div className='flex flex-col sm:flex-row py-2'>
              <p className='text-4xl' style={{ color: '#DFD0B8' }}>I'm a Junior</p>
              <div className='ml-0 sm:ml-2 text-4xl capitalize' style={{ color: '#948979'}}>
                <TypeAnimation
                  sequence={['Web Developer', 1000, 'Mobile App Developer', 1000]}
                  wrapper="span"
                  speed={40}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center mt-2 mb-2'>
              <div className='border-2 py-2 px-3 rounded-full flex items-center justify-center btn' style={{ borderColor: '#DFD0B8' }} onClick={() => scrollToSection(hireMeRef)}>
                <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Download CV</p>
                <img src={downloads} alt="" className="h-6 w-6 ml-2" />
              </div>
              <div className='flex flex-row ml-0 sm:ml-5 mt-5 sm:mt-0'>
                <img src={fb} alt="" className="h-12 w-12 item-div" />
                <img src={gh} alt="" className="h-12 w-12 ml-5 item-div" />
                <img src={ln} alt="" className="h-12 w-12 ml-5 item-div" />
                <img src={tl} alt="" className="h-12 w-12 ml-5 item-div" />
              </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-5 mb-5 w-full h-auto sm:h-16 p-3 rounded-md justify-around items-center nav-bar'>
              <a href="#hire-me" className="nav-link text-2xl nav-option p-1 w-full text-center border-b-2 sm:border-0" style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }} onClick={() => scrollToSection(hireMeRef)}>Hire me</a>
              <a href="#projects" className="nav-link text-2xl nav-option p-1 my-2 sm:my-0 w-full text-center border-b-2 sm:border-0" style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }} onClick={() => scrollToSection(projectsRef)}>Projects</a>
              <a href="#about" className="nav-link text-2xl nav-option p-1 w-full text-center border-b-2 sm:border-0" style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }} onClick={() => scrollToSection(aboutRef)}>About</a>
            </div>
          </div>
          <img src={img} alt="" className="btn z-10 h-2/3 w-2/3 md:h-1/2 md:w-1/2 xl:h-1/3 xl:w-1/3 rounded-full ml-0 xl:ml-20 border-8 p-2 border-dashed" style={{ borderColor: '#DFD0B8' }} />
        </div>
      </div>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Technology />
      <Experience />
      <Contact ref={hireMeRef} />
      <Footer />
    </div>
  );
}

export default Main;

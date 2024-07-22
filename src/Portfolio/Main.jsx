import React, { useState, useEffect } from 'react';
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
import { Link, animateScroll } from 'react-scroll';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import CircularProgress from '@mui/material/CircularProgress';
import { notifySuccess, notifyError } from './component/CustomToastify';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top hover" onClick={scrollToTop}>
          <ArrowCircleUpIcon style={{ fontSize: 40, color: '#DFD0B8', cursor: 'pointer' }} />
        </div>
      )}
    </>
  );
};

function Main() {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple clicks

    setLoading(true);
    try {
      // Simulate download with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Trigger the download
      window.location.href = 'https://drive.google.com/uc?export=download&id=13xnoumPcQRC5GdoisYGefsDYoxTMjOyL';
      notifySuccess('CV downloaded successfully!');
    } catch (error) {
      notifyError('Failed to download CV');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', overflow: 'auto' }}>
      <div className='flex justify-center items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'>
        <div className='flex flex-col xl:flex-row justify-center items-center w-full'>
          <div className='flex flex-col w-full xl:w-1/2'>
            <div className='flex flex-col sm:flex-row h-full'>
              <p className='text-5xl' style={{ color: '#DFD0B8' }}>Hi, it's</p>
              <div className='ml-0 sm:ml-2 text-5xl capitalize' style={{ color: '#948979' }}>
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
              <div className='ml-0 sm:ml-2 text-4xl capitalize' style={{ color: '#948979' }}>
                <TypeAnimation
                  sequence={['Web Developer', 1000, 'Mobile App Developer', 1000]}
                  wrapper="span"
                  speed={40}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className='flex flex-col 1sm:flex-row justify-center 1sm:justify-start items-center mt-2 mb-2'>
              <button
                className='border-2 py-2 px-3 rounded-full flex flex-row items-center justify-center btn'
                style={{ borderColor: '#DFD0B8' }}
                onClick={handleDownloadClick}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <>
                    <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Downloading...</p>
                    <CircularProgress className='ml-2' size={24} style={{ color: '#DFD0B8' }} />
                  </>
                ) : (
                  <>
                    <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Download CV</p>
                    <img src={downloads} alt="Download" className="h-6 w-6 ml-2" />
                  </>
                )}
              </button>
              <div className='flex flex-row ml-0 1sm:ml-5 mt-5 1sm:mt-0'>
                <a href="https://www.facebook.com/ricknearohn.pacana.3/" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" className="h-12 w-12 item-div" />
                </a>
                <a href="https://github.com/Morphmorph" target="_blank" rel="noopener noreferrer">
                  <img src={gh} alt="GitHub" className="h-12 w-12 ml-5 item-div" />
                </a>
                <a href="https://www.linkedin.com/in/rickne-arohn-pacana-948b67254/" target="_blank" rel="noopener noreferrer">
                  <img src={ln} alt="LinkedIn" className="h-12 w-12 ml-5 item-div" />
                </a>
                <a href="https://t.me/ricknearohn" target="_blank" rel="noopener noreferrer">
                  <img src={tl} alt="Telegram" className="h-12 w-12 ml-5 item-div" />
                </a>
              </div>
            </div>
            <div className='flex flex-col 1sm:flex-row mt-5 mb-5 w-full h-auto 1sm:h-16 p-3 rounded-md justify-around items-center nav-bar'>
              <Link
                to="hire-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-2xl nav-option p-1 w-full text-center border-b-2 1sm:border-0"
                style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }}
              >
                Hire me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-2xl nav-option p-1 my-2 1sm:my-0 w-full text-center border-b-2 1sm:border-0"
                style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }}
              >
                Projects
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link text-2xl nav-option p-1 w-full text-center border-b-2 1sm:border-0"
                style={{ color: '#DFD0B8', borderColor: '#DFD0B8' }}
              >
                About
              </Link>
            </div>
          </div>
          <img src={img} alt="Profile" className="btn z-10 h-2/3 w-2/3 md:h-1/2 md:w-1/2 xl:h-1/3 xl:w-1/3 rounded-full ml-0 xl:ml-20 border-8 p-2 border-dashed" style={{ borderColor: '#DFD0B8' }} />
        </div>
      </div>
      <About />
      <Projects />
      <Technology />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Main;

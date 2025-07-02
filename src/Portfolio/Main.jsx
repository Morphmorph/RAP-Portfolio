import React, { useState, useEffect } from 'react';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Technology from './Technology';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import { Link, animateScroll } from 'react-scroll';
import CustomNavbar from './component/CustomNavbar';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 500,
    smooth: 'easeInOutQuad',
  });
};

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

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top arrow-up" onClick={scrollToTop}>
          <ArrowCircleUpIcon style={{ fontSize: 40}} />
        </div>
      )}
    </>
  );
};


function Main() {

  return (
    <div>
      <CustomNavbar scrollToTop={scrollToTop}/>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
      
        <Home/>
        <About />
        <Projects />
        {/* <Technology /> */}
        {/* <Experience /> */}
        <Contact />
        <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent " />
        <Footer scrollToTop={scrollToTop} />
        <ScrollToTop />
      </div>
    </div>
    
  );
}

export default Main;

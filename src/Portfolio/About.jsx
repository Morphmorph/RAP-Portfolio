import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import { SlightFlip } from './component/CustomSlightFlip';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Link } from 'react-scroll';

// Define the fade-in-up and pop-up animation variant
const fadeInUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 5, scale: 1}
};

const popUp = {
  hidden: { opacity: 0, x: "25vw" },
  visible: { opacity: 1, x: 0 },
};

// Define the container animation variant for sequential appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.5, 
      delayChildren: 1 
    } 
  }
};

function About() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      id="about"
      className='flex flex-col items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SlightFlip 
        text="ABOUT" 
        className="text-5xl sm:text-7xl uppercase"
        style={{ color: '#DFD0B8' }}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />

      <motion.div
        className='flex text-center p-5'
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <p className='text-4xl sm:text-5xl' style={{ color: '#948979' }}>
          I'm enthusiastic about venturing into web & mobile application development, with a strong desire to bring creative ideas to life. I'm motivated by the prospect of turning concepts into meaningful projects.
        </p>
      </motion.div>

      <motion.div
        className='flex flex-col sm:flex-row w-full h-full justify-around items-center'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={linksRef}
      >
        <motion.div
          variants={popUp}
          initial="hidden"
          animate={linksInView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className='flex items-center rounded-lg h-24 w-full sm:w-48'
        >
          <Link
            to="exp"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'
            style={{ textDecoration: 'none', color: '#153448' }}
          >
            <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>1</h1>
            <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Year(s) of experience</p>
            <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={popUp}
          initial="hidden"
          animate={linksInView ? "visible" : "hidden"}
          transition={{ duration: 1.5 }}
          className='flex items-center rounded-lg h-24 w-full sm:w-48 my-5 sm:my-0'
        >
          <Link
            to="master"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='flex items-center rounded-lg h-24 w-full sm:w-48 p-5  nav-bar nav-option'
            style={{ textDecoration: 'none', color: '#153448' }}
          >
            <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>5</h1>
            <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Technology mastered</p>
            <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
          </Link>
        </motion.div>
        
        <motion.div
          variants={popUp}
          initial="hidden"
          animate={linksInView ? "visible" : "hidden"}
          transition={{ duration: 2 }}
          className='flex items-center rounded-lg h-24 w-full sm:w-48'
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='flex items-center rounded-lg h-24 w-full sm:w-48 p-5 nav-bar nav-option'
            style={{ textDecoration: 'none', color: '#153448' }}
          >
            <h1 className='text-7xl mr-5 sm:mr-2' style={{ color: '#DFD0B8' }}>3</h1>
            <p className='text-2xl font-semibold' style={{ color: '#153448' }}>Projects completed</p>
            <ArrowCircleUpIcon className='absolute right-0 bottom-0 m-1 icon' sx={{ fontSize: 40, color: '#DFD0B8' }} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;

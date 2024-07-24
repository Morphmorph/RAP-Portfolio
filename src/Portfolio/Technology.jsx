import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import { SlightFlip } from './component/CustomSlightFlip';
import img from '../assets/html.png';
import img2 from '../assets/css-3.png';
import img3 from '../assets/physics.png';
import img4 from '../assets/python.png';
import img5 from '../assets/javascript.png';

// Define the pop-up animation variant
const popUp = {
  hidden: { opacity: 0, y: "10vh" },
  visible: { opacity: 1, y: 0 }
};

const TechnologyItem = ({ image, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.img 
      ref={ref}
      src={image} 
      alt="" 
      className="h-28 w-28 sm:h-44 sm:w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10 Style" 
      variants={popUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1.5 + (index * 0.2) }}
    />
  );
};

function Technology() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const images = [img, img2, img3, img4, img5];

  return (
    <motion.section
      id="master"
      className='relative flex flex-col items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SlightFlip 
        text="TECHNOLOGIES" 
        className="text-5xl sm:text-7xl uppercase"
        style={{ color: '#DFD0B8' }}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />
      <div className='flex flex-wrap justify-center w-full mt-10 p-2 Style'>
        {images.map((image, index) => (
          <TechnologyItem 
            key={index}
            image={image}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Technology;

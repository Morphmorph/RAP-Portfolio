import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import { SlightFlip } from './component/CustomSlightFlip';
import img3 from '../assets/eportal.png';

const Style = {
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  boxShadow: '5px -4px 1px rgb(173, 173, 172)',
};

const popUp = {
  hidden: { opacity: 0, x: "-5vw" },
  visible: { opacity: 1, x: 0 }
};

const popUp2 = {
  hidden: { opacity: 0, x: "10vw" },
  visible: { opacity: 1, x: 0 }
};

const ExperienceItem = ({ image, title, company, address, position, time }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className='flex flex-col sm:flex-row my-5 items-center sm:items-start'
      variants={popUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
    >
      <motion.img 
        src={image} 
        alt={title} 
        className="h-44 w-44 p-5 rounded-lg img mr-0 sm:mr-10" 
        style={Style}
        variants={popUp}
        transition={{ duration: 1 }}
      />
      <div className='flex flex-col items-center sm:items-start'>
        <motion.h1 
          className='text-4xl sm:text-5xl text-center sm:text-start ' 
          style={{ color: '#DFD0B8' }}
          variants={popUp}
          transition={{ duration: 1.5 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className='text-3xl text-center sm:text-start ' 
          style={{ color: '#948979' }}
          variants={popUp}
          transition={{ duration: 1.7 }}
        >
          {company}
        </motion.p>
        <motion.p 
          className='text-3xl text-center sm:text-start ' 
          style={{ color: '#948979' }}
          variants={popUp}
          transition={{ duration: 1.9 }}
        >
          {address}
        </motion.p>
        <motion.p 
          className='text-3xl text-center sm:text-start ' 
          style={{ color: '#DFD0B8' }}
          variants={popUp}
          transition={{ duration: 2.1 }}
        >
          {position}
        </motion.p>
        <div className='flex flex-wrap justify-center mt-5'>
          <motion.h1 
            className='text-2xl p-2 rounded-full w-44 text-center btn mx-2 mb-2' 
            style={{ color: '#DFD0B8', borderWidth: '1px', borderColor: '#DFD0B8'}}
            variants={popUp2}
            transition={{ duration: 1.5 }}
          >
            {time}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

function Experience() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const experience = [
    {
      image: img3,
      title: 'Intern (Trainee)',
      company: 'Cagayan de Oro Christian School - UCCP',
      address: 'F.Abellanosa St, Cagayan de Oro City, Philippines 9000',
      position: 'Full Stack Developer',
      time: '3 Months'
    }
  ];

  return (
    <motion.section
      id="exp"
      className='relative flex flex-col items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SlightFlip 
        text="EXPERIENCE" 
        className="text-5xl sm:text-7xl uppercase"
        style={{ color: '#DFD0B8' }}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />
      <motion.div
        className='flex flex-col w-full justify-center items-center mt-10 p-2'
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.5,
              delayChildren: 1
            } 
          }
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {experience.map((exp, index) => (
          <ExperienceItem
            key={index}
            image={exp.image}
            title={exp.title}
            company={exp.company}
            address={exp.address}
            position={exp.position}
            time={exp.time}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Experience;

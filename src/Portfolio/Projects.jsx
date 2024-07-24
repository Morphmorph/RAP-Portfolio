import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import { SlightFlip } from './component/CustomSlightFlip';
import img from '../assets/hanapp.png';
import img2 from '../assets/gabay.png';
import img3 from '../assets/eportal.png';

const Style = {
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  boxShadow: '5px -4px 1px rgb(173, 173, 172)',
};

// Define the pop-up animation variant
const popUp = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: { opacity: 1, x: 0 }
};
const popUp2 = {
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0 }
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

const ProjectItem = ({ image, title, description, technologies, link }) => {
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
        className="h-44 w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" 
        style={Style}
        variants={popUp}
        transition={{ duration: 1.5 }}
      />
      <div className='flex flex-col items-center sm:items-start'>
        <motion.a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-4xl sm:text-5xl text-center sm:text-start hover' 
          style={{ color: '#DFD0B8' }}
          variants={popUp}
          transition={{ duration: 1.8 }}
        >
          {title}
        </motion.a>
        <motion.p 
          className='text-3xl text-center sm:text-start' 
          style={{ color: '#948979' }}
          variants={popUp}
          transition={{ duration: 1.5 }}
        >
          {description}
        </motion.p>
        <div className='flex flex-wrap justify-center mt-5'>
          {technologies.map((tech, index) => (
            <motion.a 
              key={index} 
              href={tech.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='text-2xl p-2 rounded-full w-44 text-center btn mx-2 mb-2' 
              style={{ color: '#DFD0B8', borderWidth: '1px', borderColor: '#DFD0B8'}}
              variants={popUp2}
              transition={{ duration: 1.5 + (index * 0.1) }}
            >
              {tech.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      image: img,
      title: 'Hanapp',
      description: 'A job finder application for graduating college students',
      technologies: [
        { name: 'React Native', link: 'https://github.com/Morphmorph/hanapp-front-end' },
        { name: 'Django', link: 'https://github.com/Morphmorph/hanapp-back-end' },
        { name: 'MySQL', link: 'https://github.com/Morphmorph/hanapp-back-end' }
      ],
      link: 'https://github.com/Morphmorph/hanapp-front-end'
    },
    {
      image: img2,
      title: 'Gabay',
      description: 'A mobile application that predicts future Savings using time series forecasting with Weighted Moving Average (WMA)',
      technologies: [
        { name: 'React Native', link: 'https://github.com/Morphmorph/gabay-front-end' },
        { name: 'Django', link: 'https://github.com/Morphmorph/gabay-back-end' },
        { name: 'SQLite', link: 'https://github.com/Morphmorph/gabay-back-end' }
      ],
      link: 'https://github.com/Morphmorph/gabay-front-end'
    },
    {
      image: img3,
      title: 'COCS E-Portal',
      description: 'A website portal for teachers, students, and admin for easy access to school matters, grades, and attendance.',
      technologies: [
        { name: 'React JS', link: 'https://github.com/Morphmorph/e-portal/tree/dev' },
        { name: 'Django', link: 'https://github.com/Morphmorph/e-portal-backend' },
        { name: 'SQLite', link: 'https://github.com/Morphmorph/e-portal-backend' }
      ],
      link: 'https://github.com/Morphmorph/e-portal/tree/dev'
    }
  ];

  return (
    <motion.section
      id="projects"
      className='flex flex-col justify-center w-full items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SlightFlip 
        text="PROJECTS" 
        className="text-5xl sm:text-7xl uppercase"
        style={{ color: '#DFD0B8' }}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />
      <motion.div
        className='flex flex-col w-full justify-center items-start mt-10 p-2'
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            sectionRef={sectionRef}  // Pass sectionRef to ProjectItem
            inView={inView}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;

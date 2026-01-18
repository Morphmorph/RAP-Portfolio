import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import img from '../assets/hanapp.png';
import img2 from '../assets/gabay.png';
import img3 from '../assets/eportal.png';


const fadeInUp = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.7, // delays each by 0.2s
      ease: 'easeOut',
    },
  }),
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

const ProjectItem = ({ image, title, description, technologies, link, index, inView, status }) => {
  const isActive = status === 'Active';

  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bg-[#181F1B] rounded-md shadow-md border border-[#2a2a2a] p-5 flex flex-col w-full"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={title}
          className="h-24 w-32 sm:h-32 sm:w-36 md:h-44 md:w-48 object-contain rounded-lg mb-5"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-[#00c04b] hover:underline mb-2"
        >
          {title}
        </a>
        <p className="text-[#DFD0B8] text-base mb-4 capitalize">{description}</p>

        <div className="w-full">
          <p className="text-[#00c04b] font-medium mb-2">Technologies:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, i) => (
              <a
                key={i}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border border-[#DFD0B8] text-[#DFD0B8] rounded-full text-sm hover:bg-[#00c04b]/10 transition"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex mt-auto justify-end pt-5">
        <div className="text-xs  text-[#DFD0B8]">
          Status:<span className={`ml-2 ${isActive ? 'text-green-400' : 'text-red-400'}`}>{status}</span>
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
      description: 'A mobile application designed to help graduating college students find job opportunities.',
      technologies: [
        { name: 'React Native', link: 'https://github.com/Morphmorph/hanapp-front-end' },
        { name: 'Django', link: 'https://github.com/Morphmorph/hanapp-back-end' },
        { name: 'MySQL', link: 'https://github.com/Morphmorph/hanapp-back-end' },
      ],
      link: 'https://github.com/Morphmorph/hanapp-front-end',
      status: 'Inactive',
    },
    {
      image: img2,
      title: 'Gabay',
      description: ' A Mobile Application that Predict Future Savings Using the Time Series Forecasting with Weighted Moving Average (WMA)',
      technologies: [
        { name: 'React Native', link: 'https://github.com/Morphmorph/gabay-front-end' },
        { name: 'Django', link: 'https://github.com/Morphmorph/gabay-back-end' },
        { name: 'SQLite', link: 'https://github.com/Morphmorph/gabay-back-end' },
      ],
      link: 'https://github.com/Morphmorph/gabay-front-end',
      status: 'Inactive',
    },
    {
      image: img3,
      title: 'COCS E-Portal',
      description: 'A platform for teachers and students to manage grades and track attendance.',
      technologies: [
        { name: 'React JS', link: 'https://github.com/Morphmorph/e-portal/tree/dev' },
        { name: 'Django', link: 'https://github.com/Morphmorph/e-portal-backend' },
        { name: 'SQLite', link: 'https://github.com/Morphmorph/e-portal-backend' },
      ],
      link: 'https://github.com/Morphmorph/e-portal/tree/dev',
      status: 'Inactive',
    },
  ];

  return (
    <section
      id="projects"
      className="flex relative flex-col min-h-full"
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >

  <div className='flex flex-col mx-0 my-5 md:mx-20 p-5  min-h-full pb-10 rounded-xl box-border '>
       
      <div className="flex flex-row justify-center xxl:justify-end uppercase ">
        <p className="text-2xl md:text-4xl text-[#DFD0B8] mr-2">My</p>
        <span className="text-2xl md:text-4xl font-semibold text-[#00c04b]">Works</span>
      </div>
  <hr className="my-2 h-px border-0 bg-gradient-to-l from-transparent via-[#00c04b] to-transparent xxl:from-[#00c04b]  xxl:to-transparent " />

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 w-full max-w-[1280px]"
    variants={containerVariants}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
  >
    {projects.map((project, index) => (
      <ProjectItem
        key={index}
        image={project.image}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        link={project.link}
        index={index}
        inView={inView}
        status={project.status}
      />

    ))}
  </motion.div>
  </div>
</section>

  );
}


export default Projects;

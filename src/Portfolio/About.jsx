import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from './component/CustomUseinView';
import img from '../assets/profile.jpg';

// Define the fade-in-up and pop-up animation variant
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
  const [sectionRef, inView] = useInView({ threshold: 0.3 });
  const [linksRef, linksInView] = useInView({ threshold: 0.1 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 });

  const cardData = [
  {
    title: 'Web Development',
    description: 'Creating clean, responsive websites with a focus on clarity and usability.',
    stacks: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Django', 'SQLite', 'MYSQL'],
    tools: ['VS Code', 'Git & GitHub', 'Chrome DevTools','Postman'],
  },
  {
    title: 'App Development',
    description: 'Building impactful and efficient apps tailored to real-world needs.',
    stacks: ['React Native', 'Node.js', 'Firebase', 'SQLite', 'Django', 'MYSQL'],
    tools: ['VS Code', 'Git & GitHub', 'Postman', 'Expo Go'],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that enhance user experience and engagement.',
    tools: ['Figma', 'Trello', 'Photoshop', 'Sketch', 'Framer'],
  },
];


  return (
    <section
      id="about"
      className="flex relative flex-col min-h-full"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* <div className='h-1/2 w-screen bg-red-500 flex absolute'>
      </div> */}
      <div className='flex flex-col m-5 md:m-20 p-5 bg-stone-950/20 min-h-full pb-10 rounded-xl box-border shadow-lg'>
       
      <div className="flex flex-row justify-center xxl:justify-start uppercase ">
        <p className="text-2xl md:text-4xl text-[#DFD0B8] mr-2">About</p>
        <span className="text-2xl md:text-4xl font-semibold text-[#00c04b]">Me</span>
      </div>
      <div className="relative  items-center justify-center">
       <div className="gradient-circle"></div>
      <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent xxl:from-[#00c04b]  xxl:to-transparent " />
      <motion.div
        className='flex flex-col xl:flex-row items-center justify-center gap-10 xxl:gap-20 
                  w-full max-w-[1280px] mx-auto px-5 pt-10 '
        variants={fadeInUp}
        initial="hidden"
        ref={sectionRef}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <img
          src={img}
          alt="Profile"
          className="rounded-full border-4 border-[#00c04b] h-64 w-64 md:h-96 md:w-96 object-cover"
        />

        <div className='w-auto text-left'>
          <h1 className='my-2 text-[#00c04b] text-2xl md:text-3xl'>Hello World,</h1>
          <p className='text-xl md:text-2xl text-[#DFD0B8]'>
             &emsp;&emsp;Hi, I’m Rickne Arohn Pacana, a BSIT graduate at USTP with a strong passion for web and app development.
            I specialize in technologies like React.js, React Native, Django, Figma, HTML, CSS, and JavaScript.
            I enjoy building responsive, user-friendly interfaces and functional applications that solve real-world problems.
            <br/><br/>
             &emsp;&emsp;I'm constantly exploring new tools and best practices to improve my development workflow. I love learning,
            taking on new challenges, and collaborating with fellow developers. Feel free to check out some of my projects
            below, and don’t hesitate to reach out if you have any questions or feedback!
          </p>
        </div>
      </motion.div>
      </div>
      <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent to-transparent " />
      <hr className="mt-10 my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent " />
      <h1 className="text-2xl md:text-3xl text-[#DFD0B8] mr-2 text-center">Others</h1>
      <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent " />
      
      <div
        ref={cardsRef}
        className='flex flex-col xxl:flex-row gap-y-10 xxl:gap-x-16  
                  w-auto justify-center relative mt-10 xxl:mx-0 '
      >
        {cardData.map((card, index) => (
          <motion.div
          key={index}
          custom={index}
          variants={fadeInUp}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="relative flex flex-col bg-[#181F1B] min-h-auto w-full rounded-md p-6 gap-4 shadow-lg "
        >
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#00c04b] mb-2">{card.title}</h1>
            <p className="text-lg text-[#DFD0B8]">{card.description}</p>
          </div>

          <div className="text-sm text-[#B0AFAF] mt-4">
            {/* Show stacks only if the card is NOT UI/UX Design */}
            {card.title !== 'UI/UX Design' && card.stacks && (
              <>
                <p className="font-semibold text-[#00c04b]">Stacks:</p>
                <ul className="flex flex-wrap justify-center gap-2 mt-1">
                  {card.stacks.map((stack, i) => (
                    <li key={i} className="bg-[#2A2F2C] px-3 py-1 rounded-full">{stack}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Always show tools */}
            {card.tools && (
              <>
                <p className="font-semibold text-[#00c04b] mt-4">Tools:</p>
                <ul className="flex flex-wrap justify-center gap-2 mt-1">
                  {card.tools.map((tool, i) => (
                    <li key={i} className="bg-[#2A2F2C] px-3 py-1 rounded-full">{tool}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </motion.div>

        ))}
      </div>
      </div>
      
    </section>
  );
}

export default About;

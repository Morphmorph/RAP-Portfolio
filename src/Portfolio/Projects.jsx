import React from 'react';
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

const ProjectItem = ({ image, title, description, technologies }) => (
  <div className='flex flex-col sm:flex-row my-5 items-center sm:items-start'>
    <img src={image} alt={title} className="h-44 w-44 p-5 rounded-lg ml-0 sm:ml-10 img mr-0 sm:mr-10" style={Style}/>
    <div className='flex flex-col items-center sm:items-start'>
      <h1 className='text-4xl sm:text-5xl text-center sm:text-start hover' style={{ color: '#DFD0B8' }}>{title}</h1>
      <p className='text-3xl text-center sm:text-start' style={{ color: '#948979' }}>{description}</p>
      <div className='flex flex-wrap justify-center mt-5'>
        {technologies.map((tech, index) => (
          <h1 key={index} className='text-2xl p-2 rounded-full w-44 text-center btn mx-2 mb-2' style={{ color: '#DFD0B8', borderWidth: '1px', borderColor: '#DFD0B8'}}>
            {tech}
          </h1>
        ))}
      </div>
    </div>
  </div>
);

function Projects() {
  const projects = [
    {
      image: img,
      title: 'Hanapp',
      description: 'A job finder application for graduating college students',
      technologies: ['React Native', 'Django', 'MySQL']
    },
    {
      image: img2,
      title: 'Gabay',
      description: 'A mobile application that predict future Savings using the time series forecasting with Weighted Moving Average (WMA)',
      technologies: ['React Native', 'Django', 'SQLite']
    },
    {
      image: img3,
      title: 'COCS E-Portal',
      description: 'A website portal for teachers, students and admin for easy access of school matters, grades and attendance.',
      technologies: ['React JS', 'Django', 'SQLite']
    }
  ];

  return (
    <section id="projects" className='flex flex-col justify-center w-full items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'>
      <h1 className='text-5xl sm:text-7xl uppercase hover' style={{color: '#DFD0B8'}}>Projects</h1>
      <div className='flex flex-col w-full justify-center items-start mt-10 p-2 Style' >
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

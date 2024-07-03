import React from 'react'
import img3 from '../assets/eportal.png';

const Style = {
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  boxShadow: '5px -4px 1px rgb(173, 173, 172)',
};

const ProjectItem = ({ image, title, company, address, position, time }) => (
  <div className='flex flex-col sm:flex-row my-5 items-center sm:items-start'>
    <img src={image} alt={title} className="h-44 w-44 p-5 rounded-lg img mr-0 sm:mr-10" style={Style}/>
    <div className='flex flex-col items-center sm:items-start'>
      <h1 className='text-4xl sm:text-5xl text-center sm:text-start hover' style={{ color: '#DFD0B8' }}>{title}</h1>
      <p className='text-3xl text-center sm:text-start hover' style={{ color: '#948979' }}>{company}</p>
      <p className='text-3xl text-center sm:text-start hover' style={{ color: '#948979' }}>{address}</p>
      <p className='text-3xl text-center sm:text-start hover' style={{ color: '#DFD0B8' }}>{position}</p>
      <div className='flex flex-wrap justify-center mt-5'>
        
          <h1 className='text-2xl p-2 rounded-full w-44 text-center btn mx-2 mb-2' style={{ color: '#DFD0B8', borderWidth: '1px', borderColor: '#DFD0B8'}}>
            {time}
          </h1>
        
      </div>
    </div>
  </div>
);

function Experience() {
  const experience = [
    {
      image: img3,
      title: 'Intern (Trainee)',
      company: 'Cagayan de Oro Chistian School - UCCP',
      address: 'F.Abellanosa St, Cagayan de Oro City, Philippines 9000',
      position: 'Full Stack Developer',
      time: '3 Months'
    }
  ];

  return (
    <section id="exp" className='relative flex flex-col items-center p-5 xl:p-0 min-h-full md:min-h-screen'>
      <h1 className='text-5xl sm:text-7xl uppercase hover' style={{color: '#DFD0B8'}}>Experience</h1>
      <div className='flex flex-col w-full justify-center items-center mt-10 p-2 Style' >
        {experience.map((experience, index) => (
          <ProjectItem
            key={index}
            image={experience.image}
            title={experience.title}
            company={experience.company}
            address={experience.address}
            position={experience.position}
            time={experience.time}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience
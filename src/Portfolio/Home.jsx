// Home.jsx
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Icon } from '@iconify/react';
import CircularProgress from '@mui/material/CircularProgress';
import bgImage from '../assets/bimg.png';
import { useInView } from './component/CustomUseinView';
import { Link } from 'react-scroll';
import { notifySuccess, notifyError } from './component/CustomToastify';

const fadeInUp = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.7,
      ease: 'easeOut',
    },
  }),
};

const socialItems = [
  { type: 'button' },
  { type: 'share' },
  { type: 'icon', url: 'https://www.facebook.com/ricknearohn.pacana.3/' },
  { type: 'icon', url: 'https://github.com/Morphmorph' },
  { type: 'icon', url: 'https://www.linkedin.com/in/rickne-arohn-pacana-948b67254/' },
  { type: 'icon', url: 'https://t.me/ricknearohn' },
];

const Home = ({ }) => {
  const [loading, setLoading] = useState(false);
  const [socialRef, isSocialVisible] = useInView({ threshold: 0.2 });

  const handleDownloadClick = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = 'https://drive.google.com/uc?export=download&id=13xnoumPcQRC5GdoisYGefsDYoxTMjOyL';
      notifySuccess('CV downloaded successfully!');
    } catch (error) {
      notifyError('Failed to download CV');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Rickne Arohn Pacana Portfolio',
        text: 'Check out my portfolio!',
        url: window.location.href,
      });
      notifySuccess('Thanks for sharing!');
    } else {
      await navigator.clipboard.writeText(window.location.href);
      notifySuccess('Link copied to clipboard!');
    }
  } catch (error) {
    notifyError('Failed to share');
  }
};

  return (
    <div
      id="home"
      className="flex justify-center items-center p-5 xl:p-0 min-h-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     <div className="flex flex-col xxl:flex-row justify-center w-full box-border gap-x-10 bg-stone-950/80 min-h-full xxl:min-h-[90vh] rounded-xl m-0 xl:m-5 shadow-lg p-5">  
    <div className="flex flex-col xxl:flex-row justify-center w-auto max-w-[1280px] mx-auto box-border gap-x-10">
    <div className="flex flex-col justify-start xxl:justify-center w-full min-h-full xxl:min-h-screen text-start xxl:text-center relative">
              <div className='flex flex-col sm:flex-row '>
                <p className='text-3xl md:text-5xl mr-0 sm:mr-2 ' style={{ color: '#DFD0B8' }}>Hi, I'm</p>
                <div className='font-semibold text-3xl md:text-5xl capitalize' style={{ color: '#00c04b' }}>
                  <TypeAnimation
                    sequence={['Rickne Arohn Pacana', 1000]}
                    wrapper="span"
                    speed={20}
                    style={{ display: 'inline-block' }}
                    repeat={0}
                  />
                </div>
              </div>
              <div className='flex flex-col sm:flex-row py-2 flex-wrap'>
                <p className='text-xl md:text-4xl mr-0 sm:mr-2' style={{ color: '#DFD0B8' }}>I'm into </p>
                <div className=' text-2xl md:text-4xl capitalize' style={{ color: '#00c04b' }}>
                  <TypeAnimation
                    sequence={['Web Development.', 1000, 'Mobile App Development.', 1000, 'UI/UX Design.', 1000]}
                    wrapper="span"
                    speed={15}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                  />
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-start  mt-2 mb-2'>
              <motion.div
              ref={socialRef}
              className="flex flex-col sm:flex-row items-center 1sm:items-start gap-4 sm:gap-5 mt-5"
            >
              {/* Download Button - always on top in mobile, side in desktop */}
              <motion.div
                custom={0}
                variants={fadeInUp}
                initial="hidden"
                animate={isSocialVisible ? 'visible' : 'hidden'}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
              >
                <button
                  className="group py-2 px-3 rounded-md flex flex-row items-center justify-center btn text-[#DFD0B8] border-[#DFD0B8]"
                  onClick={handleDownloadClick}
                  disabled={loading}
                  style={{
                    borderWidth: '1px',
                    minWidth: '152px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {loading ? (
                    <>
                      <p className="text-base sm:text-xl text-[#00c04b]">Downloading...</p>
                      <CircularProgress className="ml-2" size={20} style={{ color: '#00c04b' }} />
                    </>
                  ) : (
                    <>
                      <p className="text-lg sm:text-xl">Download CV</p>
                      <Icon
                        icon="line-md:download-loop"
                        className="h-5 w-5 ml-2 transition-colors duration-0 group-hover:text-[#00c04b]"
                      />
                    </>
                  )}
                </button>
              </motion.div>

              {/* Social Icons as a row in small screens, wrap on large */}
              <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-5 sm:mt-0 w-full max-w-[300px] mx-auto">

              {socialItems.map((item, index) => {
              if (item.type === 'icon') {
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isSocialVisible ? 'visible' : 'hidden'}
                    layout="position"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                    >
                      <SocialIcon
                        url={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          height: 48,
                          width: 48,
                        }}
                        bgColor="transparent"
                        fgColor="#DFD0B8"
                        className="item-div"
                      />
                    </motion.div>
                  </motion.div>
                );
              }

              if (item.type === 'share') {
                return (
                  <motion.div
                    key={`share-${index}`}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isSocialVisible ? 'visible' : 'hidden'}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                      onClick={handleShare}
                     
                      className=""
                    >
                      <SocialIcon 
                      icon="mdi:share-variant" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        height: 45,
                        width: 45,
                      }}
                      bgColor="transparent"
                      fgColor="#DFD0B8"
                      className='item-div' />
                    </motion.div>
                  </motion.div>
                );
              }

              return null;
            })}

            </div>

            </motion.div>


              </div>
            </div>
            
            <div className='flex relative w-full flex-col mt-10 xxl:mt-0'>
            <div className="flex flex-row justify-center xxl:justify-start">
              <p className="text-2xl md:text-4xl text-[#DFD0B8] mr-2">Explore</p>
              <span className="text-2xl md:text-4xl text-[#00c04b] font-semibold uppercase">On</span>
            </div>
              <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent xxl:from-[#00c04b]  xxl:to-transparent " />

              <div className='flex flex-wrap gap-2'>
                <p className='text-4xl md:text-5xl font-medium text-[#DFD0B8]'>Based in Bukidnon & CDO City</p>
                <span className='text-4xl md:text-5xl font-medium text-[#DFD0B8]'>I'm a Developer & UI/UX Designer Enthusiast.</span>
                <span className='mt-10 text-lg md:text-xl font-medium text-[#DFD0B8]'>
                  Are you looking for a front-end developer, a designer to build your brand? <br />
                  Let’s connect and see how I can help you.
                </span>
              </div>

              {/* Wrap the button in a div to control its width */}
              <motion.div 
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate={isSocialVisible ? 'visible' : 'hidden'}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
              className="mt-8 w-fit self-center xxl:self-start"
              >
                <Link
                  to="hire-me"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button
                    className="group py-2 px-3 rounded-md flex flex-row items-center justify-center btn text-[#DFD0B8] border-[#DFD0B8]"
                    disabled={loading}
                    style={{
                      borderWidth: '1px',
                      minWidth: '152px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p className="text-lg sm:text-xl">Hire Me</p>
                    <Icon
                      icon="hugeicons:arrow-right-01"
                      className="h-5 w-5 ml-2 transition-colors duration-0 group-hover:text-[#00c04b]"
                    />
                  </button>
                </Link>
              </motion.div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Home;

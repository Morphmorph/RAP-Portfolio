import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { notifySuccess, notifyError } from './component/CustomToastify';
import logo from '../assets/ON.png';

const socialItems = [
  { type: 'share'}, 
  { type: 'icon', url: 'https://www.facebook.com/ricknearohn.pacana.3/' },
  { type: 'icon', url: 'https://github.com/Morphmorph' },
  { type: 'icon', url: 'https://www.linkedin.com/in/rickne-arohn-pacana-948b67254/' },
  { type: 'icon', url: 'https://t.me/ricknearohn' }
];

function Footer({ scrollToTop }) {
  
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

    <div className='flex flex-col justify-center w-full items-center p-5 xl:p-0 min-h-full'>
        <h1 className='text-md' style={{color: '#DFD0B8'}}>All Rights Reserved</h1>
        <div className='flex flex-row justify-center items-center p-2 gap-x-3'>
        {socialItems.map((item, index) => {
              if (item.type === 'icon') {
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    
                  >
                    <motion.div
                      whileHover={{ scale: 1.08}}
                      whileTap={{ scale: 1 }}
                      transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                    >
                      <SocialIcon
                        url={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          height: 28,
                          width: 28,
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
                        height: 28,
                        width: 28,
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
    <h1 className='text-lg flex flex-row gap-x-2' style={{color: '#DFD0B8'}}>© <img src={logo} alt="Profile" className="h-7 w-7 cursor-pointer" onClick={scrollToTop}/>2024 Rickne Arohn A. Pacana</h1>
    </div>
  )
}

export default Footer
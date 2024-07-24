import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlightFlip } from './component/CustomSlightFlip';
import { useInView } from './component/CustomUseinView';
import emailjs from 'emailjs-com';
import CustomTextField from './component/CustomTextField';
import CustomDropdown from './component/CustomDropdown';
import CustomTextArea from './component/CustomTextArea';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CircularProgress from '@mui/material/CircularProgress';
import { notifySuccess, notifyError } from './component/CustomToastify';

const popUp = {
  hidden: { opacity: 0, x: "-5vw" },
  visible: { opacity: 1, x: 0 }
};

const popUp2 = {
  hidden: { opacity: 0, x: "10vw" },
  visible: { opacity: 1, x: 0 }
};

const Contact = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ threshold: 0.1 });
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    service: null,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!userData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!userData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!userData.service) {
      newErrors.service = 'Service is required';
      isValid = false;
    }

    if (!userData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setUserData({ ...userData, [field]: value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleInputFocus = (field) => {
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const servicesOptions = [
    { value: 'web_development', label: 'Web Development' },
    { value: 'mobile_development', label: 'Mobile Development' },
  ];

  const handleSubmit = async () => {
    if (loading) return; // Prevent multiple submissions

    if (validateForm()) {
      setLoading(true);

      try {
        const response = await emailjs.send('service_6oosfz8', 'template_t9av2do', userData, 'sPAsevpVQfDzvQ4ul');
        console.log('Success:', response);
        notifySuccess('Message sent successfully');
        setUserData({
          name: userData.name,
          email: userData.email,
          service: null,
          message: ''
        });
      } catch (error) {
        console.error('Error:', error);
        notifyError('Failed to send message');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.section
      id="hire-me"
      className='flex flex-col items-center p-5 xl:p-0 min-h-full my-0 sm:my-24'
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SlightFlip 
        text="HIRE ME" 
        className="text-5xl sm:text-7xl uppercase"
        style={{ color: '#DFD0B8' }}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
      />
      <motion.div
        className='flex flex-col-reverse lg:flex-row justify-center items-center w-full'
        variants={popUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <div className='mx-14 xl:mx-24'></div>
        <motion.div
          className='flex flex-col w-full lg:w-1/2 contact m-5 rounded-lg p-5'
          style={{ borderWidth: '2px', borderColor: '#948979' }}
          ref={formRef}
          variants={popUp}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          transition={{ duration: 1.2 }}
        >
          <div className='flex flex-col 1sm:flex-row'>
            <CustomTextField
              label="Name"
              value={userData.name}
              onChange={e => handleInputChange(e, 'name')}
              onFocus={() => handleInputFocus('name')}
              name="name"
              error={!!errors['name']}
              helperText={errors['name']}
            />
            <div className='mx-3'></div>
            <CustomTextField
              label="Email"
              value={userData.email}
              onChange={e => handleInputChange(e, 'email')}
              onFocus={() => handleInputFocus('email')}
              name="email"
              error={!!errors['email']}
              helperText={errors['email']}
            />
          </div>
          <div className=''>
            <CustomDropdown
              label="Service"
              value={userData.service}
              onChange={e => handleInputChange(e, 'service')}
              onFocus={() => handleInputFocus('service')}
              name="service"
              error={!!errors['service']}
              helperText={errors['service']}
              options={servicesOptions}
            />
          </div>
          <div className='flex flex-col mt-8'>
            <CustomTextArea
              label="Message"
              value={userData.message}
              onChange={e => handleInputChange(e, 'message')}
              onFocus={() => handleInputFocus('message')}
              error={!!errors['message']}
              maxRows={4}
              helperText={errors['message']}
            />
          </div>
          <div className='w-auto flex justify-center md:justify-end'>
            <button
              className='border-2 py-2 px-3 rounded-full flex flex-row items-center justify-center btn'
              style={{ borderColor: '#DFD0B8' }}
              onClick={handleSubmit}
              disabled={loading}
              variants={popUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              {loading ? (
                <>
                  <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Sending...</p>
                  <CircularProgress className='ml-2' size={24} style={{ color: '#DFD0B8' }} />
                </>
              ) : (
                <>
                  <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Send message</p>
                  <SendIcon className='send ml-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
                </>
              )}
            </button>
          </div>
        </motion.div>
        <div className='mx-0 lg:mx-14'></div>
        <div className='flex flex-wrap lg:flex-col justify-start w-full lg:w-1/2 items-start mt-10 xl:mt-0'>
          <motion.div 
            className='flex flex-row-reverse hover mr-5 lg:mr-0'
            ref={infoRef}
            variants={popUp2}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            transition={{ duration: 1.2 }}
          >
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>Baungon, Bukidnon, 8707</h1>
            <LocationOnIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </motion.div>
          <motion.div 
            className='flex flex-row-reverse my-5 1sm:my-0 lg:my-5 hover mr-5 lg:mr-0'
            ref={infoRef}
            variants={popUp2}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            transition={{ duration: 1.4 }}
          >
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>arohnpacana@gmail.com</h1>
            <EmailIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </motion.div>
          <motion.div 
            className='flex flex-row-reverse hover'
            ref={infoRef}
            variants={popUp2}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            transition={{ duration: 1.6 }}
          >
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>(+63) 951 010 9974</h1>
            <PhoneIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

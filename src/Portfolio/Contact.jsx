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
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const [formRef, formInView] = useInView({ threshold: 0.2 });
  const [infoRef, infoInView] = useInView({ threshold: 0.2 });
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
  if (field === 'service') {
    const selectedValue = e.target.value;
    const selectedOption = servicesOptions.find(opt => opt.value === selectedValue);
    setUserData({ ...userData, service: selectedOption });
  } else {
    const { value } = e.target;
    setUserData({ ...userData, [field]: value });
  }

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
    { value: 'ui/ux_design', label: 'UI/UX Design' },
  ];

 const handleSubmit = async () => {
  if (loading) return;

  if (validateForm()) {
    setLoading(true);

    try {
      const templateParams = {
        name: userData.name,
        email: userData.email,
        service: userData.service?.label || '', // ✅ Send label
        message: userData.message,
      };

      console.log('Sending to EmailJS:', templateParams); // Debug log

      const response = await emailjs.send(
        'service_6oosfz8',
        'template_t9av2do',
        templateParams,
        'sPAsevpVQfDzvQ4ul'
      );

      console.log('Success:', response);
      notifySuccess('Message sent successfully');

      setUserData({
        name: userData.name,
        email: userData.email,
        service: null,
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      notifyError('Failed to send message');
    } finally {
      setLoading(false);
    }
  }
};


  return (
    <section
      id="hire-me"
      className="flex relative flex-col min-h-full"
      ref={sectionRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className='flex flex-col mx-0 my-5 md:mx-20 p-5 min-h-full pb-10 rounded-xl'>
      <div className="flex flex-row justify-center xxl:justify-start uppercase ">
        <p className="text-2xl md:text-4xl text-[#DFD0B8] mr-2">Hire</p>
        <span className="text-2xl md:text-4xl font-semibold text-[#00c04b]">Me</span>
      </div>
      
      <hr className="border-0 bg-gradient-to-r from-transparent to-transparent " />
       <hr className="my-2 h-px border-0 bg-gradient-to-r from-transparent via-[#00c04b] to-transparent xxl:from-[#00c04b]  xxl:to-transparent " />
      
      <motion.div
        className='flex flex-col-reverse xl:flex-row items-center w-full '
        variants={popUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
       
        <motion.div
          className='flex flex-col w-full xl:w-1/2 contact m-5 '
          style={{backgroundColor: 'transparent', borderWidth: 0,}}
          ref={formRef}
          variants={popUp}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          transition={{ duration: 1.2 }}
        >
          <div className='flex flex-col 1sm:flex-row '>
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
              value={userData.service?.value || ''}
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
              className='border-2 py-2 px-3 rounded-md flex flex-row items-center justify-center btn text-[#DFD0B8] border-[#DFD0B8]'
              style={{
                borderWidth: '1px',
                minWidth: '152px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <p className='text-2xl text-center text-[#00c04b]'>Sending...</p>
                  <CircularProgress className='ml-2' size={24} style={{ color: '#00c04b' }} />
                </>
              ) : (
                <>
                  <p className='text-2xl text-center '>Send message</p>
                  <SendIcon className='send h-5 w-5 ml-2 transition-colors duration-0 group-hover:text-[#00c04b]'/>
                </>
              )}
            </button>
            
          </div>
        </motion.div>
        <div className='ml-0 lg:ml-28'></div>
        <div className='flex flex-wrap xl:flex-col justify-start w-fit xl:w-1/2  items-center xl:items-start mt-5 xl:mt-0'>
          <motion.div 
            className='flex flex-row-reverse mr-5 xl:mr-0'
            ref={infoRef}
            variants={popUp2}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            transition={{ duration: 1.2 }}
          >
            <h1 className='text-lg sm:text-2xl' style={{ color: '#DFD0B8' }}>Baungon, Bukidnon</h1>
            <LocationOnIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </motion.div>
          <motion.div 
            className='flex flex-row-reverse my-5 1sm:my-0 lg:my-5 mr-5 lg:mr-0'
            ref={infoRef}
            variants={popUp2}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            transition={{ duration: 1.4 }}
          >
            <h1 className='text-lg sm:text-2xl' style={{ color: '#DFD0B8' }}>arohnpacana@gmail.com</h1>
            <EmailIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </motion.div>
          
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Contact;

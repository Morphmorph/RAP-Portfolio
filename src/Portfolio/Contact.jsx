import React, { useState } from 'react';
import CustomTextField from './component/CustomTextField';
import CustomDropdown from './component/CustomDropdown';
import CustomTextArea from './component/CustomTextArea';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    service: null,
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setUserData({ ...userData, [field]: value });

    // Error handling
    if (value.trim() === '') {
      setErrors({ ...errors, [field]: `${field} is required` });
    } else {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const servicesOptions = [
    { value: 'web_development', label: 'Web Development' },
    { value: 'mobile_development', label: 'Mobile Development' },
  ];

  return (
    <section id="hire-me" className='relative flex flex-col items-center p-5 xl:p-0 min-h-screen'>
      <h1 className='text-5xl sm:text-7xl uppercase hover' style={{ color: '#DFD0B8' }}>Hire me</h1>
      <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-full'>
        <div className='flex flex-col h-auto xl:w-1/2 contact m-5 rounded-lg p-5' style={{ borderWidth: '2px', borderColor: '#948979' }}>
          <div className='flex flex-row'>
            <CustomTextField
              label="Name"
              value={userData.name}
              onChange={e => handleInputChange(e, 'name')}
              name="name"
              error={errors['name']}
              helperText={errors['name']}
            />
            <div className='mx-3'></div>
            <CustomTextField
              label="Email"
              value={userData.email}
              onChange={e => handleInputChange(e, 'email')}
              name="email"
              error={errors['email']}
              helperText={errors['email']}
            />
          </div>
          <div className='flex flex-row'>
            <CustomDropdown
              label="Service"
              value={userData.service}
              onChange={e => handleInputChange(e, 'service')}
              name="service"
              error={errors['service']}
              helperText={errors['service']}
              options={servicesOptions}
            />
          </div>
          <div className='flex flex-col my-5'>
            <CustomTextArea
              label="Message"
              value={userData.message}
              onChange={e => handleInputChange(e, 'message')}
              error={errors['message']}
              maxRows={4}
              helperText={errors['message']}
            />
            <div className='w-auto h-auto flex justify-center md:justify-end'>
              <div className='border-2 py-2 px-3 rounded-full flex flex-row items-center justify-center btn' style={{ borderColor: '#DFD0B8' }} onClick={{}}>
                <p className='text-2xl text-center' style={{ color: '#DFD0B8' }}>Send message</p>
                <SendIcon className='send ml-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='mx-24'></div>
        <div className='flex flex-wrap lg:flex-col justify-start w-full md:w-auto items-start mt-10 xl:mt-0 px-5 '>
          <div className='flex flex-row-reverse hover mr-5 lg:mr-0'>
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>Baungon, Bukidnon, 8707</h1>
            <LocationOnIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </div>
          <div className='flex flex-row-reverse my-5 1sm:my-0 lg:my-5 hover mr-5 lg:mr-0'>
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>arohnpacana@gmail.com</h1>
            <EmailIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </div>
          <div className='flex flex-row-reverse hover'>
            <h1 className='text-2xl' style={{ color: '#DFD0B8' }}>(+63) 951 010 9974</h1>
            <PhoneIcon className='mr-2' sx={{ fontSize: 30, color: '#DFD0B8' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

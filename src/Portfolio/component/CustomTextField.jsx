import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '10px',
      borderColor: error ? '#780000' : '#DFD0B8',
    },
    backgroundColor: '#3C5B6F',
    borderRadius: 10,
    color: '#DFD0B8',
    '&.Mui-focused fieldset': {
      borderColor: '#DFD0B8',
    },
    '&:hover fieldset': {
      borderColor: '#DFD0B8',
    },
    '& input': {
      color: '#DFD0B8',
    },
  },
  '& .MuiInputLabel-root': {
    color: error ? '#780000' : '#DFD0B8',
    '&.Mui-focused': {
      color: '#DFD0B8',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#780000',
  },
}));

function CustomTextField({ value, label, type, onChange, required, error, helperText, maxRows, ...rest }) {
  const handleInputChange = (event) => {
    if (type === 'numeric') {
      // Remove non-numeric characters from input value
      event.target.value = event.target.value.replace(/\D/g, '');
    }
    // Forward the event to the onChange handler
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledTextField
      label={label}
      value={value || ''}
      variant="outlined"
      fullWidth
      multiline
      maxRows={maxRows} // Set the maximum number of rows
      type={type}
      onChange={handleInputChange}
      required={required}
      error={error}
      helperText={error ? helperText : ' '} // Ensure helper text remains to maintain layout
      {...rest}
    />
  );
}

export default CustomTextField;

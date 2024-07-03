import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const StyledTextArea = styled(TextField)(({ theme, error }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '10px',
      borderColor: error ? '#780000' : '#DFD0B8',
    },
    backgroundColor: '#3C5B6F',
    borderRadius: 10,
    color: '#DFD0B8',
    '&.Mui-focused fieldset': {
      borderColor: error ? '#780000' : '#DFD0B8',
    },
    '&:hover fieldset': {
      borderColor: error ? '#780000' : '#DFD0B8',
    },
    '& textarea': {
      color: '#DFD0B8',
    },
  },
  '& .MuiInputLabel-root': {
    color: error ? '#780000' : '#DFD0B8',
    '&.Mui-focused': {
      color: error ? '#780000' : '#DFD0B8',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#780000',
    paddingBottom: '8px', // Add vertical padding when there's an error
  },
}));

function CustomTextArea({ value, label, onChange, onFocus, required, error, helperText, ...rest }) {
  return (
    <StyledTextArea
      label={label}
      value={value || ''}
      variant="outlined"
      fullWidth
      onChange={onChange}
      onFocus={onFocus}
      required={required}
      error={error}
      helperText={error ? helperText : ' '} // Ensure helper text remains to maintain layout
      {...rest}
    />
  );
}

export default CustomTextArea;

// CustomSelect.js
import React from 'react';
import { MenuItem, FormControl, Select, InputLabel, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const StyledFormControl = styled(FormControl)(({ theme, error}) => ({
  '& .MuiInputBase-root': {
    '& fieldset': {
      borderRadius: '0px',
      borderColor: error ? '#780000' : '#00c04b',
    },
    backgroundColor: '#181F1B',
    borderRadius: 0,
    '&.Mui-focused fieldset': {
      borderColor: '#DFD0B8',
    },
    '&:hover fieldset': {
      borderColor: '#DFD0B8',
    },
    '& .MuiSelect-select': {
      color: '#DFD0B8',
    },
    '& .MuiSelect-icon': {
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

function CustomDropdown({ value, label, onChange, required, error, helperText, options, ...rest }) {
  return (
    <StyledFormControl variant="outlined" fullWidth error={error} required={required}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value || ''}
        onChange={onChange}
        label={label}
        {...rest}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}

export default CustomDropdown;

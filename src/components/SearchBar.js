import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <Box sx={{
      padding: '2rem',
      width: 'auto',
      textAlign: 'right',
      backgroundImage: "url('https://roommatesdecor.com/cdn/shop/files/RMK12446RL_31937e70-8baf-439c-ab8d-28cb4cd1da78.jpg?v=1721843907')",
      backgroundSize: '20%',
      backgroundPosition: "inherit",
      backgroundRepeat: "repeat",
      backgroundAttachment: 'fixed',
    }}>
      <TextField
        label="Search by Name"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        size="small"
        inputProps={{ maxLength: 30 }}
        sx={{ 
          backgroundColor: 'white', 
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#69C62D',
              color: '#69C62D',
            },
            '&:hover fieldset': {
              borderColor: '#69C62D',
            },
          },
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: '#69C62D',
              backgroundColor: '#FFFFFF',
              paddingLeft: "0.2rem",
              paddingRight: "0.2rem"
            },
          '&.MuiInputLabel-shrink': {
            backgroundColor: '#FFFFFF',
            paddingLeft: "0.2rem",  
            paddingRight: "0.2rem", 
          },
          }
        }}
        aria-label="Search characters by name"
      />
    </Box>
  );
};

export default SearchBar;

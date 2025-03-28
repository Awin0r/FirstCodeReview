import React from 'react';
import { TextField } from '@mui/material';
import './SearchBar.css';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <section className="searchBar">
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
          }
        }}
        aria-label="Search characters by name"
      />
    </section>
  );
};

export default SearchBar;

import React from 'react';
import {Box, Typography } from '@mui/material';
import { useEffect } from 'react';

const Welcome = () => {

  // Conditional style to have a black background in the home to fit the styling
  useEffect(() => {
    // Add a class to the body for the home page
    document.body.classList.add('home-page');

    // Cleanup: Remove the class when leaving the page
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'top', 
        width: '100%', 
        height: '100%',
        backgroundColor: 'black',
      }}
    >
        <Typography
            sx={{
            marginTop: '2rem', 
            marginBottom: '2rem',
            textAlign: 'center', 
            fontSize: '1.4rem', 
            fontWeight: 'bold', 
            color: 'white',
            }}
        >
            Are you discussing in which episode this or that character showed up? 
            Find your solution! 
        </Typography>
        <Box
            sx={{
            width: '80rem',
            height: '40rem',
            backgroundImage: "url('https://i.pinimg.com/originals/fa/16/51/fa16514fbec646d08f51e1bd5fdc6ab5.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px',
            }}
        />
        </Box>
  );
}

export default Welcome;
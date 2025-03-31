import React from 'react';
import {Box, Typography } from '@mui/material';

const Welcome = () => {
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
            backgroundImage: "url('https://i.pinimg.com/originals/fa/16/51/fa16514fbec646d08f51e1bd5fdc6ab5.gif')", // Placeholder image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px', // Optional: rounded corners for the image
            }}
        />
        </Box>
  );
}

export default Welcome;
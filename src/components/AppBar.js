import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PathConstants from '../routes/PathConstants';

const MyAppBar = (  ) => {
  return (
    <AppBar position="sticky" sx={{ background: "linear-gradient(to bottom, #161621, #39427C)" }}>
      <Toolbar>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png" 
          alt='Logo Rick and Morty'
          loading="lazy"
        />
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        </Typography>

        <NavLink
          to={PathConstants.CHARACTERDATABASE}
          className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
          aria-label="Ir a la base de datos de personajes" //Para la accesibilidad :o
        >
          Character Database
        </NavLink>

        <NavLink
          to={PathConstants.CARDVIEW}
          className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
          aria-label="Ver tarjetas de personajes"
        >
          Characters Card
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;

import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardViewPage = () => {
  const [characters, setCharacters] = useState([]);
  
  // Obtener la data de la Api de Rick & Morti
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching characters:', error));
  }, []);

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundImage: "url('https://roommatesdecor.com/cdn/shop/files/RMK12446RL_31937e70-8baf-439c-ab8d-28cb4cd1da78.jpg?v=1721843907')",
      backgroundSize: "20%",
      backgroundPosition: "inherit",
      backgroundRepeat: "repeat",
      }}>
      <Grid container spacing={4}>
        {characters.map((character) => (
          <Grid item xs={6} sm={4} md={3} key={character.id}>
            <Card >

              <CardMedia
                component="img"
                alt={character.name}
                height= '10%'
                width= '10%'
                image={character.image}
                sx={{ paddingTop: '0' }}
              />


              <CardContent>
                <Typography variant="h6">{character.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Gender: {character.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {character.status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Species: {character.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {character.location.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Episodes: {character.episode.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardViewPage;


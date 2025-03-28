import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CharacterTable = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [episodes, setEpisodes] = useState({});  // Almacenar detalles de los episodios fetched por ID

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching characters:', error));
  }, []);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Fetch de los detalles de los episodios
  const fetchEpisodeDetails = async (episodeUrls) => {
    const episodeDetails = await Promise.all(
      episodeUrls.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((episodeData) => ({
            name: episodeData.name,
            season: episodeData.episode.split('E')[0],  // Extraer el número de temporada
            episodeNumber: episodeData.episode.split('E')[1],  // Extraer el número de episodio
          }))
      )
    );

    // Devuelve un objeto que asigna las URL de los episodios a sus detalles
    return episodeDetails;
  };

  // Obtener detalles de los episodios de cada personaje
  useEffect(() => {
    characters.forEach((character) => {
      if (character.episode.length) {
        fetchEpisodeDetails(character.episode).then((episodeDetails) => {
          setEpisodes((prevEpisodes) => ({
            ...prevEpisodes,
            [character.id]: episodeDetails,
          }));
        });
      }
    });
  }, [characters]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "linear-gradient(to right, #FEF96C, #98D9D9)" }}>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '30%', borderBottom: "2px solid #9AA2F8"}}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '10%', borderBottom: "2px solid #9AA2F8"}}>Gender</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '10%', borderBottom: "2px solid #9AA2F8"}}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '10%', borderBottom: "2px solid #9AA2F8"}}>Species</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '30%', borderBottom: "2px solid #9AA2F8"}}>Location</TableCell>
            <TableCell sx={{ fontWeight: 'bold', textTransform: "uppercase", width: '10%', borderBottom: "2px solid #9AA2F8"}}>Episodes Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCharacters.map((character, index) => (
            <React.Fragment key={character.id}>
              <TableRow>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>
                  <IconButton onClick={() => handleExpandClick(index)}>
                    <ExpandMoreIcon />
                  </IconButton>
                  {character.name}
                </TableCell>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>{character.gender}</TableCell>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>{character.status}</TableCell>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>{character.species}</TableCell>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>{character.location.name}</TableCell>
                <TableCell sx={{borderBottom: "1px solid #9AA2F8"}}>{character.episode.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={12} sx={{ padding: '0'}}>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Box sx={{padding: '1rem', minHeight: '150px' }}>

                      <Grid container spacing={2} >

                        <Grid item xs={12} sm={12} md={12} sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                          <img
                            src={character.image}
                            alt={character.name}
                            style={{
                              width: '10rem',
                              height: '10rem',
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                          />
                          <Grid sx={{ marginTop: '1.5rem' }}>
                            <Typography>{character.name}</Typography>
                            <Typography>{character.gender}</Typography>
                            <Typography>{character.status}</Typography>
                            <Typography>{character.species}</Typography>
                            <Typography>{character.origin.name}</Typography>
                            <Typography>{character.location.name}</Typography>
                          </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          {episodes[character.id] && (
                            <Box >

                              <Table sx={{ width: '100%' }}>
                                <TableHead>
                                  <TableRow sx={{ background: "linear-gradient(to right, #B4D331, #59A249)" }}>
                                    <TableCell sx={{ fontWeight: 'bold', width: '80%', borderBottom: "2px solid #88C345" }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', width: '10%', borderBottom: "2px solid #88C345" }}>Season</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', width: '10%', borderBottom: "2px solid #88C345" }}>Episode</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {episodes[character.id].map((episode, episodeIndex) => (
                                    <TableRow key={episodeIndex}>
                                      <TableCell sx={{ borderBottom: "1px solid #88C345"}}>{episode.name}</TableCell>
                                      <TableCell sx={{ borderBottom: "1px solid #88C345"}}>{episode.season}</TableCell>
                                      <TableCell sx={{ borderBottom: "1px solid #88C345"}}>{episode.episodeNumber}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CharacterTable;


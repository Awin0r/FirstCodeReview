import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box, Typography, Grid2 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CharacterTable = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [episodes, setEpisodes] = useState({});
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching characters:', error));
  }, []);

  // In order to open each row associated info
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

    // Returns an object that assigns URL of the episodes to their details
    return episodeDetails;
  };

  // Obtain episode details for each specific character
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

  // Filter the characters that match the search condition
  // Use of the tolowercase to ensure the search is  case-insensitive (doesn´t matter if you write uppercase or lowercase)
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "linear-gradient(to right, #FEF96C, #98D9D9)" }}>
            <TableCell sx={{ ...headerCellStyles, width: '30%'}}>Name</TableCell>
            <TableCell sx={{ ...headerCellStyles, width: '10%'}}>Gender</TableCell>
            <TableCell sx={{ ...headerCellStyles, width: '10%'}}>Status</TableCell>
            <TableCell sx={{ ...headerCellStyles, width: '10%'}}>Species</TableCell>
            <TableCell sx={{ ...headerCellStyles, width: '30%'}}>Location</TableCell>
            <TableCell sx={{ ...headerCellStyles, width: '10%'}}>Episodes Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCharacters.map((character, index) => (
            <React.Fragment key={character.id}>
              <TableRow>
                <TableCell sx={{ ...bodyCellStyles }}>
                  <IconButton onClick={() => handleExpandClick(index)}>
                    <ExpandMoreIcon />
                  </IconButton>
                  {character.name}
                </TableCell>
                <TableCell sx={{ ...bodyCellStyles }}>{character.gender}</TableCell>
                <TableCell sx={{ ...bodyCellStyles }}>{character.status}</TableCell>
                <TableCell sx={{ ...bodyCellStyles }}>{character.species}</TableCell>
                <TableCell sx={{ ...bodyCellStyles }}>{character.location.name}</TableCell>
                <TableCell sx={{ ...bodyCellStyles }}>{character.episode.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={12} sx={{ padding: '0'}}>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Box sx={{padding: '1rem', minHeight: '150px' }}>

                      <Grid2 container spacing={2} >

                        <Grid2 item size={{ xs:12, sm:12, md:12}} sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
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
                          <Grid2 sx={{ marginTop: '1.5rem' }}>
                            <Typography>{character.name}</Typography>
                            <Typography>{character.gender}</Typography>
                            <Typography>{character.status}</Typography>
                            <Typography>{character.species}</Typography>
                            <Typography>{character.origin.name}</Typography>
                            <Typography>{character.location.name}</Typography>
                          </Grid2>
                        </Grid2>

                        <Grid2 item size={{ xs:12, sm:12, md:12}}>
                          {episodes[character.id] && (
                              <Table sx={{ width: '100%' }}>
                                <TableHead>
                                  <TableRow sx={{ background: "linear-gradient(to right, #B4D331, #59A249)" }}>
                                    <TableCell sx={{ ...secHeaderCellStyles, width: '80%' }}>Name</TableCell>
                                    <TableCell sx={{ ...secHeaderCellStyles, width: '10%' }}>Season</TableCell>
                                    <TableCell sx={{ ...secHeaderCellStyles, width: '10%' }}>Episode</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {episodes[character.id].map((episode, episodeIndex) => (
                                    <TableRow key={episodeIndex}>
                                      <TableCell sx={{ ...secBodyCellStyles }}>{episode.name}</TableCell>
                                      <TableCell sx={{ ...secBodyCellStyles }}>{episode.season}</TableCell>
                                      <TableCell sx={{ ...secBodyCellStyles }}>{episode.episodeNumber}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                          )}
                        </Grid2>
                      </Grid2>
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

// Styling for the grid to avoid super long css inline

const headerCellStyles = {
  fontWeight: 'bold', 
  textTransform: "uppercase", 
  borderBottom: "2px solid #9AA2F8"
}

const bodyCellStyles = {
  borderBottom: "1px solid #9AA2F8"
}

const secHeaderCellStyles = {
  fontWeight: 'bold', 
  textTransform: "uppercase", 
  borderBottom: "2px solid #88C345"
}

const secBodyCellStyles = {
  borderBottom: "1px solid #88C345"
}

export default CharacterTable;


import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Grid';
import Typography from '@mui/material/Grid';

function CharactersPage() {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      fetch('https://thronesapi.com/api/v2/Characters')
        .then(response => response.json())
        .then(data => setCharacters(data))
        .catch(error => console.error(error));
    }, []);
    console.log(characters)
    return (
      <Grid container spacing={2}>
        {characters.map(character => (
          <Grid item md={6} key={character.url}>
            <Link to={`/characters/${character.id}`}>
                <Paper>
                <img src={character.imageUrl} alt={character.fullName} />
                <Typography variant="h6">{character.fullName} - {character.title}</Typography>

                </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default CharactersPage;
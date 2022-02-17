import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import GameCard from '../../Components/GameCard/GameCard';
import { API_KEY } from '../../config/config';


const HomePage = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-rating&genres=shooter`)
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  console.log(games)

  return (
    <div>
      <Box>
        <Grid container spacing={2}>
      {
        games.map((game, i) => (
          <Grid item key={i} xs={12} sm={6} md={6} lg={4}>
            <GameCard key={i} game={game}/>
          </Grid>
        ))
      }
      </Grid>
      </Box>
    </div>
  )
}

export default HomePage
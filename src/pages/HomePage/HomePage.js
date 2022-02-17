import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { API_KEY } from '../../config/config';


const HomePage = () => {

  useEffect(() => {
    fetchGames()
  },[])

  const [games, setGames] = useState([])

  const fetchGames = () => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  }

  return (
    <div>
      <ul>
      {
        games.map(game => (
          <li key={game.id}>
            <Link to={{
                pathname: `/game/${game.name}`,
                gameProps:{
                  game: game
                }
              }}>
            <h3>{game.name}</h3>
            <img src={game.background_image} alt="game"/>
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default HomePage
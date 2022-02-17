import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import React from "react";
import { Link } from "react-router-dom";
  
  
  function GameCard({ game }) {
    return (
        
      <Card sx={{ height: 300 }}>
        <Link to={{
            pathname: `/game/${game.name}`,
            gameProps:{
              game: game
            }
          }}>
          <CardMedia
            component="img"
            height="140"
            image={game.background_image}
            alt=""
          />
  
          <CardContent>
            <Typography>{game.name}</Typography>
            <Typography>#:{game.id}</Typography>
           
          </CardContent>
          </Link>
      </Card>
      
    );
  }
  export default GameCard;
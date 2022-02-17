import React from 'react'
import { Box, Typography } from '@mui/material'
const GameDetail = (props)=>{

    const {game} = props.location.gameProps
    console.log(game)

    return(
        
            <h1>{game.name}</h1>
        
    )
        
    
}

export default GameDetail
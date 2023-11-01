import React from 'react'
import { SingleGame } from '../models/GameResponse'

interface GameResultsProps {
    gameResults: SingleGame[]
}

function GameResults({gameResults}: GameResultsProps) {
  return (
    <div>GameResults</div>
  )
}

export default GameResults
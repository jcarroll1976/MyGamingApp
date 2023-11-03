import React from 'react';
import { SearchResponse } from '../models/GameResponse';
import "./GameResults.css";

interface GameResultsProps {
  gameResults: SearchResponse | undefined;
}

function GameResults({ gameResults }: GameResultsProps) {
  return (
    <div>
      <div>
        <h2>Search Results:</h2>
        <div>
            {gameResults ? (
                <div>
                {gameResults.results.map((gameResult, index) => (
                  <div key={index}>
                    <h4>{gameResult.name}</h4>
                    <div>
                      <img className='result-image' src={gameResult.background_image} alt='' />
                    </div>
                  </div>
                ))
                }
                </div>
            ) : (("Enter the name of a game"))}
            
            
        </div>
      </div>
    </div>
  );
}

export default GameResults;

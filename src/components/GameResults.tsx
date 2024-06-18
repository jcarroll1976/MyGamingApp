import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResponse } from '../models/GameResponse';
import "./GameResults.css";

interface GameResultsProps {
  gameResults: SearchResponse | undefined;
}

function GameRelease({ gameResults }: GameResultsProps) {
  return (
    <div>
      <div>
        <h2>Search Results:</h2>
        <div>
            {gameResults ? (
                <div className='search-results'>
                {gameResults.results.map((gameResult, index) => (
                  <div key={index}>
                    <h4><Link to={`/game/${gameResult.slug}`}>{gameResult.name}</Link></h4>
                    <div className='search-image-container'>
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

export default GameRelease;

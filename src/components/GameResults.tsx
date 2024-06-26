import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResponse } from '../models/GameResponse';
import "./GameResults.css";
import marioPic from "../../src/mario_PNG124.png"
import { DotLoader } from 'react-spinners';

interface GameResultsProps {
  gameResults: SearchResponse | undefined;
  isLoading: boolean;
}

function GameResults({ gameResults, isLoading }: GameResultsProps) {
  return (
    <div>
      
      {isLoading ? (
          <p className="loading-message">Searching for Games...</p>
      ) :
      gameResults ? (
        <div>
          <h2>Click on Game Title for More Details</h2>
          <ul className='search-results'>
            {gameResults.results.map((gameResult, index) => (
            <li  className="search-result" key={index}>
              <div className='search-results-title'>
                <h3><Link to={`/game/${gameResult.slug}`}>{gameResult.name}</Link></h3>
              </div>
              <div className='search-image-container'>
                <img className='result-image' src={gameResult.background_image} alt='' />
              </div>
            </li>
                ))
              }
          </ul>
        </div>
          ) : (
          <div>
            <h2>Find A Great Game!</h2>
            <div className='mario-div'>
              <img src={marioPic} alt='Pic of Mario' />
            </div>
        </div>
        )}
            
            
    </div>
      
    
  );
}

export default GameResults;





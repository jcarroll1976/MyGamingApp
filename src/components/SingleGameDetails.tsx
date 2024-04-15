import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleGame } from '../models/GameResponse'; // Import SingleGame interface
import { fetchSingleGame } from '../services/GameApiService';
import "./SingleGameDetails.css"

function SingleGameDetails() {
  const { slug } = useParams();
  const [gameDetails, setGameDetails] = useState<SingleGame | null>(null);

  const removeHtmlTags = (input:string) => {
    return input.replace(/<[^>]*>/g, ''); // Use a regular expression to remove HTML tags
  };

  useEffect(() => {
    if (slug) {
        fetchSingleGame(slug).then(data => {
            data.description = removeHtmlTags(data.description);
            setGameDetails(data);
        })
    }
  }, [slug]);

  return (
    <div className='details-container'>
      {gameDetails ? (
        <div className='details-container'>
          <h2>{gameDetails.name}</h2>
          <div className='description-container'>
            <p dangerouslySetInnerHTML={{ __html: gameDetails.description }} />
          </div>
          <p>{gameDetails.released ? (`Release Date: ${gameDetails.released}`) : "Release Date: TBA"}</p>
          <div className='detailsImage-container'>
            <img className='game-image' src={gameDetails.background_image} alt="Game Background" />
            <img className='game-image' src={gameDetails.background_image_additional} alt="Additional Background" />
          {/* Display other game details as needed */}
          </div>
        </div>
      ) : (
        ("")
      )}
    </div>
  );
}

export default SingleGameDetails;

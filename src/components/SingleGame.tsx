import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleGame } from '../models/GameResponse'; // Import SingleGame interface
import { fetchSingleGame } from '../services/GameApiService';

function SingleGameDetails() {
  const { slug } = useParams();
  const [gameDetails, setGameDetails] = useState<SingleGame | null>(null);

  useEffect(() => {
    if (slug) {
        fetchSingleGame(slug).then(data => {
            setGameDetails(data);
        })
    }
  }, [slug]);

  return (
    <div>
      {gameDetails ? (
        <div>
          <h2>{gameDetails.name}</h2>
          <p>{gameDetails.description}</p>
          <p>Released: {gameDetails.released}</p>
          <img src={gameDetails.background_image} alt="Game Background" />
          <img src={gameDetails.background_image_additional} alt="Additional Background" />
          {/* Display other game details as needed */}
        </div>
      ) : (
        ("")
      )}
    </div>
  );
}

export default SingleGameDetails;

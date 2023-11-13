import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleGame } from '../models/GameResponse'; // Import SingleGame interface
import { fetchSingleGame } from '../services/GameApiService';

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
    <div>
      {gameDetails ? (
        <div>
          <h2>{gameDetails.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: gameDetails.description }} />
          <p>{gameDetails.released ? (`Released: ${gameDetails.released}`) : "Release Date: TBA"}</p>
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

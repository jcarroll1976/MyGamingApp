import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleGame } from '../models/GameResponse'; // Import SingleGame interface
import { fetchSingleGame } from '../services/GameApiService';
import "./SingleGameDetails.css"
import { useNavigate } from 'react-router-dom';
import { platformLogos, getPlatformLogo} from "../../src/utils"

function SingleGameDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [gameDetails, setGameDetails] = useState<SingleGame | null>(null);

  const removeHtmlTags = (input:string) => {
    return input.replace(/<[^>]*>/g, ''); // Use a regular expression to remove HTML tags
  };

  const handleBack = () => {
    navigate("/search");
  }

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
          <p dangerouslySetInnerHTML={{ __html: gameDetails.description.replace(/\n/g, "<br> <br>") }} />
          </div>
          <p>{gameDetails.released ? (`Release Date: ${gameDetails.released}`) : "Release Date: TBA"}</p>
          <div className='detailsImage-container'>
            {gameDetails.background_image ? <img className='game-image' src={gameDetails.background_image} alt="Game Background" /> :<p>No Image Available</p>}
            {gameDetails.background_image_additional ? <img className='game-image' src={gameDetails.background_image_additional} alt="Additional Background" /> : <p>No Image Available</p>}
            {gameDetails.parent_platforms.map((platform) => (
              <p key={platform.platform.id}>{platform.platform.name}</p>
            ))}
          {/* Display other game details as needed */}
          </div>
        </div>
      ) : (
        ("")
      )}
      <button onClick={handleBack}>Back To Results</button>
    </div>
  );
}

export default SingleGameDetails;

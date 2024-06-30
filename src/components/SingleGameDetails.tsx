import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleGame } from '../models/GameResponse'; // Import SingleGame interface
import { fetchSingleGame } from '../services/GameApiService';
import "./SingleGameDetails.css"
import { useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

function SingleGameDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [gameDetails, setGameDetails] = useState<SingleGame | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoading,setIsLoading] = useState(true);

  const removeHtmlTags = (input:string) => {
    return input.replace(/<[^>]*>/g, ''); // Use a regular expression to remove HTML tags
  };

  const handleBack = () => {
    // navigate(-1) is not recommended in react-router-dom v6+
    // Use history.goBack() functionality provided by useNavigate
  
    // Checks if there's a previous location in history
    if (window.history.length > 1) {
      navigate(-1); // Go back to previous page in history
    } else {
      // If no previous page, navigate to home
      navigate("/");
    }
  };

  const decodeDescription = (description: string) => {
    const decodedDescription = description.replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    return decodedDescription;
  };

  const handleShowFullDescription = () => {
    setShowFullDescription(true);
  };

  const splitDescription = gameDetails?.description.split('\n\n');

  useEffect(() => {
    if (slug) {
        fetchSingleGame(slug).then(data => {
            data.description = decodeDescription(removeHtmlTags(data.description));
            setGameDetails(data);
            setIsLoading(false);
        });
        
    }
  }, [slug]);

  return (
    <div className='container'>
      {isLoading ? (
        <div className='loading-message'>
          <DotLoader color='white'/>
          <p>Loading Game Details...</p>
        </div>
      ) : (
      gameDetails ? (
        <div className='details-container'>
          <div className='description-container'>
            <h2>{gameDetails.name}</h2>
            <p>
              {gameDetails.description.length > 450 ? (
                <>
                  {gameDetails.description.substring(0, 450)}...{' '}
                  <button onClick={handleShowFullDescription}>
                    Read More
                  </button>
                </>
              ) : (
                gameDetails.description
              )}
            </p>
            <p>{gameDetails.released ? (`Release Date: ${gameDetails.released}`) : "Release Date: TBA"}</p>
            <div>
              <p>Game Platforms:</p>
              <div className='platform-container'>
              {gameDetails.parent_platforms.map((platform) => (
              <p key={platform.platform.id}>{platform.platform.name}</p>
            ))}
              </div>
            </div>
          </div>
          <div className='detailsImage-container'>
            {gameDetails.background_image ? <img className='game-image' src={gameDetails.background_image} alt="Game Background" /> :<p>No Image Available</p>}
            {gameDetails.background_image_additional ? <img className='game-image' src={gameDetails.background_image_additional} alt="Additional Background" /> : <p>No Image Available</p>}
          {/* Display other game details as needed */}
          </div>
          <div className='back-button-div'><button className='back-button' onClick={handleBack}>Back</button></div>
        </div>
      ) : (
        <h2>No Details Available</h2>
      ))}
      {showFullDescription && ( // Conditionally render modal content
          <div className='modal-backdrop'>
            <div className="modal">
              <div className='modal-header'>
                <h2>{gameDetails?.name}</h2>
              </div>
              <div className='modal-content-scrollable'>
                <p dangerouslySetInnerHTML={{ __html: gameDetails!.description }} />
                <div className='modal-close-button'>
                  <button onClick={() => setShowFullDescription(false)}>
                    X Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
    </div>
  );
}

export default SingleGameDetails;

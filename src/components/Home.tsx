import React,{useContext, useEffect,useState} from 'react';
import { Results } from '../models/GameResponse';
import { fetchGames} from '../services/GameApiService';
import {Link} from "react-router-dom";
import "./Home.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavoritesContext from '../context/FavoritesContext';
import DotLoader from "react-spinners/DotLoader";

function Home() {
    const {favorites, addFavorite,removeFavorite} = useContext(FavoritesContext);
    const [results,setResults] = useState<Results[]>([]);
    const currentYear = new Date().getFullYear();
    const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error("Error fetching games:", error);
      setIsLoading(false); // Set loading to false even on error
    });
  },[])

  return (
    <main>
        <div className='home-message'>
            <h2>Top 25 Latest Releases of {currentYear}</h2>
            <p>Click On Game Title For More Details</p>
        </div>
        {isLoading ? (
          <div className='loading-message'>
            <DotLoader color='white' />
            <p>Loading Games...</p>
          </div>
        ) : (
        <div className='home-div'>
            <ul className='results-list'>
                {results.map((result,i) =>
                <li key={i}>
                    <div className='game-title'>
                      <h3><Link to={`/game/${result.slug}`}>{result.name}</Link></h3>
                      {/*<button 
                        className='favorites-manager' 
                        style={{color: "red"}}
                        onClick={() =>
                        {favorites.includes(result) ? removeFavorite(result) : addFavorite(result)}}
                      >
                        {favorites.includes(result) ? <AiFillHeart color='red' /> : <AiOutlineHeart color='red' />}
                        </button>*/}
                    </div>
                    <div className='gameImage-div'><img src={result.background_image} alt=''/></div>
                </li>)}
            </ul>
        </div>
        )}
    </main>
  )
}

export default Home
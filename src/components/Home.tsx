import React,{useContext, useEffect,useState} from 'react';
import { Results } from '../models/GameResponse';
import { fetchGames} from '../services/GameApiService';
import {Link} from "react-router-dom";
import "./Home.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import FavoritesContext from '../context/FavortitesContext';

function Home() {
    const {favorites, addFavorite,removeFavorite} = useContext(FavoritesContext);
    const [results,setResults] = useState<Results[]>([]);
    const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
    })
  },[])
  return (
    <div className='home-div'>
        <div>
            <h2>Top 25 Latest Releases of {currentYear}</h2>
        </div>
        <div>
            <ul className='results-list'>
                {results.map((result,i) =>
                <li key={i}>
                    <div className='game-title'>
                      <h3><Link to={`/game/${result.slug}`}>{result.name}</Link></h3>
                      <AiOutlineHeart 
                        style={{color: "red"}} 
                      />
                    </div>
                    <div className='gameImage-div'><img className='game-image' src={result.background_image} alt=''/></div>
                </li>)}
            </ul>
        </div>
    </div>
  )
}

export default Home
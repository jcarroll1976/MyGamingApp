import React,{useEffect,useState} from 'react';
import { Results } from '../models/GameResponse';
import { fetchGames} from '../services/GameApiService';
import {Link} from "react-router-dom";

function Home() {
    const [results,setResults] = useState<Results[]>([]);
    const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
    })
  },[])
  return (
    <div>
        <h2>Top 25 Latest Releases of {currentYear}</h2>
        <ul className='results-list'>
          {results.map((result,i) =>
          <li key={i}><h3><Link to={`/game/${result.slug}`}>{result.name}</Link></h3><div className='gameImage-div'><img className='game-image' src={result.background_image} alt=''/></div></li>)}
        </ul>
    </div>
  )
}

export default Home
import React,{useEffect,useState} from 'react';
import { Results } from '../models/GameResponse';
import { fetchGames} from '../services/GameApiService';

function Home() {
    const [results,setResults] = useState<Results[]>([]);

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
    })
  },[])
  return (
    <div>
        <ul className='results-list'>
          {results.map((result,i) =>
          <li key={i}><h3>{result.name}</h3><div className='gameImage-div'><img className='game-image' src={result.background_image} alt=''/></div></li>)}
        </ul>
      </div>
  )
}

export default Home
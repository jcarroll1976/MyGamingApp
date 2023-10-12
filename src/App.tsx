import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Results } from './models/GameResponse';
import { fetchGames } from './services/GameApiService';
import Sidebar from './components/Sidebar';

function App() {
  const [results,setResults] = useState<Results[]>([]);

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
    })
  },[])
  return (
    <div className="App">
      <Navbar />
      <div>
        <ul>
          {results.map((result,i) =>
          <li key={i}><h1>{result.name}</h1><div className='gameImage-div'><img className='game-image' src={result.background_image} alt=''/></div></li>)}
        </ul>
      </div>
      <Sidebar />
    </div>
  );
}

export default App;

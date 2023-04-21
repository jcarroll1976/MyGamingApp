import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Results } from './models/GameResponse';
import { fetchGames } from './services/GameApiService';

function App() {
  const [results,setResults] = useState<Results[]>([]);

  useEffect(() => {
    fetchGames().then(data => {
      setResults(data);
    })
  })
  return (
    <div className="App">
      <Navbar />
      <div>
        <ul>
          {results.map((result,i) =>
          <li key={i}><h1>{result.name}</h1><p><img src={result.background_image} alt=''/></p></li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

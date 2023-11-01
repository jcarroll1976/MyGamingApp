import React, { useState,useEffect } from 'react'
import { SingleGame } from '../models/GameResponse';
import { fetchSearchResults } from '../services/GameApiService';
import GameResults from './GameResults';


function Search() {
    const [searchTerm,setSearchTerm] = useState("");
    const [searchResults,setSearchResults] = useState<SingleGame[]>([]);

    const handleSearchTerm = () => {
        let game = searchTerm.split(" ").join("-").toLowerCase();
        setSearchTerm(game);
        setSearchTerm("");
    }

    useEffect(() => {
        if(searchTerm) {
            fetchSearchResults(searchTerm).then(data => {
                setSearchResults(data)
            })
        }
    })
  return (
    <div>
        <input
        type='text'
        value={searchTerm}
        placeholder='Please enter the name of a game series'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearchTerm}>Search</button>
        <div>
            <GameResults gameResults={searchResults} />
        </div>
    </div>
  )
}

export default Search
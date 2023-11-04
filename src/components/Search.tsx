import React, { useState,useEffect } from 'react'
import { SearchResponse } from '../models/GameResponse';
import { fetchSearchResults } from '../services/GameApiService';
import GameResults from './GameResults';

interface SearchProps {
    setSearchTerm: (input:string) => void;
    searchTerm: string;
}

function Search({searchTerm,setSearchTerm}: SearchProps) {
    const [input,setInput] = useState("");
    const [searchResults,setSearchResults] = useState<SearchResponse | undefined>();

    const handleSearch = () => {
        let slug = input.split(" ").join("-").toLowerCase();
        setSearchTerm(slug);
        fetchSearchResults(slug).then(data => {
            setSearchResults(data);
        })
        setInput("");
        setSearchTerm("");
    }
  return (
    <div>
        <input
        type='text'
        value={input}
        placeholder='Please enter the name of a game series'
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <div>
            <GameResults gameResults={searchResults} />
        </div>
    </div>
  )
}

export default Search
import React, { useState } from 'react'
import { SearchResponse } from '../models/GameResponse';
import { fetchSearchResults } from '../services/GameApiService';
import GameResults from './GameResults';
import "./Search.css";

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
        <div className='search-div'>
            <input
            className='search-input'
            type='text'
            value={input}
            placeholder='Please enter the name of a game or series'
            onChange={(e) => setInput(e.target.value)}
            />
            <button className='search-button' onClick={handleSearch}>Click To Search</button>
        </div>
        <div>
            <GameResults gameResults={searchResults} />
        </div>
    </div>
  )
}

export default Search;


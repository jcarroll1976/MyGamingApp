import React, { useEffect, useState } from 'react'
import { SearchResponse } from '../models/GameResponse';
import { fetchSearchResults } from '../services/GameApiService';
import GameResults from './GameResults';
import "./Search.css";
import { DotLoader } from 'react-spinners';

interface SearchProps {
    setSearchTerm: (input:string) => void;
    searchTerm: string;
}

function Search({searchTerm,setSearchTerm}: SearchProps) {
    const [input,setInput] = useState("");
    const [searchResults,setSearchResults] = useState<SearchResponse | undefined>();
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        if (searchTerm) {
          setIsLoading(true);
          fetchSearchResults(searchTerm)
            .then(data => setSearchResults(data))
            .catch(error => console.error("Error fetching search results:", error))
            .finally(() => setIsLoading(false));
        }
      }, [searchTerm]);

    const handleSearch = () => {
        let slug = input.split(" ").join("-").toLowerCase();
        setSearchTerm(slug);
        setInput("");
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
            <button className='search-button' onClick={handleSearch} disabled={isLoading}>{isLoading ? "Searching..." : "Click To Search"}</button>
        </div>
        <div>
            {isLoading ? (
                <div className='loading-message'>
                    <DotLoader color='white' />
                    <p>Searching for Games...</p>
                </div>
            ) : (
            <GameResults gameResults={searchResults} isLoading={isLoading} />
            )}
        </div>
    </div>
  )
}

export default Search;


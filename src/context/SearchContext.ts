// SearchContext.js

import { createContext } from 'react';
import { SearchResponse, SingleGame } from '../models/GameResponse'; // Assuming your models location

export interface SearchContextModel {
  searchTerm: string;
  setSearchTerm: (newTerm: string) => void;
  searchResults: SearchResponse | undefined;
  setSearchResults: (data: SearchResponse) => void;
  selectedGame: SingleGame | undefined;
  setSelectedGame: (game: SingleGame) => void;
  handleSearchTermChange: (newTerm: string) => void;
  handleSearchResultsUpdate: (data: SearchResponse) => void;
}

const defaultValue: SearchContextModel = {
    searchTerm: '',
    setSearchTerm: () => { },
    searchResults: undefined,
    setSearchResults: () => { },
    selectedGame: undefined,
    setSelectedGame: () => { },
    handleSearchTermChange:() => { },
    handleSearchResultsUpdate: () => {}
    }


const SearchContext = createContext(defaultValue);
export default SearchContext;


import { ReactNode, useState } from "react";
import { SearchResponse, SingleGame } from '../models/GameResponse';
import SearchContext from "./SearchContext";

interface Props {
    children: ReactNode
}

export default function SearchContextProvider({children}:Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResponse | undefined>(undefined);
  const [selectedGame, setSelectedGame] = useState<SingleGame | undefined>(undefined);

  const handleSearchTermChange = (newTerm: string) => {
    setSearchTerm(newTerm);
  };

  const handleSearchResultsUpdate = (data: SearchResponse) => {
    setSearchResults(data);
  };

  const handleSelectedGameUpdate = (game: SingleGame) => {
    setSelectedGame(game);
  };

  return (
    <SearchContext.Provider value={{searchTerm, setSearchTerm, handleSearchTermChange, searchResults, 
                                  setSearchResults, handleSearchResultsUpdate, selectedGame, setSelectedGame: handleSelectedGameUpdate }}
    >
        {children}
    </SearchContext.Provider>
  )

}
import { ReactNode, useState } from "react";
import { Results, SingleGame } from "../models/GameResponse";
import FavoritesContext from "./FavoritesContext";

interface Props {children: ReactNode}

export default function FavoritesContextProvider({children}: Props) {
    const [favorites,setFavorites] = useState<SingleGame[]>([]);

    function addFavorite(game: SingleGame){
        setFavorites((prevFavorites) => [...prevFavorites, game])
    }

    function removeFavorite(game: SingleGame) {
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.slug !== game.slug))
    }

    function isFavorite(game: SingleGame) {
        return favorites.some((favorite) => favorite.slug === game.slug);
      }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite,isFavorite,removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}
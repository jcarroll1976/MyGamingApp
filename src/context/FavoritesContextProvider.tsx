import { ReactNode, useState } from "react";
import { Results } from "../models/GameResponse";
import FavoritesContext from "./FavoritesContext";

interface Props {children: ReactNode}

export default function FavoritesContextProvider({children}: Props) {
    const [favorites,setFavorites] = useState<Results[]>([]);

    function addFavorite(game: Results){
        setFavorites((prevFavorites) => [...prevFavorites, game])
    }

    function removeFavorite(game: Results) {
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.slug !== game.slug))
    }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite,removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}
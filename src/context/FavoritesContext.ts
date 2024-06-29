import { createContext } from "react";
import { SingleGame } from "../models/GameResponse"

interface FavoritesContextModel {
    favorites: SingleGame[];
    addFavorite: (game:SingleGame) => void;
    removeFavorite: (game:SingleGame) => void;
    isFavorite:(game: SingleGame) => boolean;
}

const defaultValue:FavoritesContextModel = {
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false
}

const FavoritesContext = createContext(defaultValue)

export default FavoritesContext;
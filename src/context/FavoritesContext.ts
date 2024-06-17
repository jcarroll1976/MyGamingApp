import { createContext } from "react";
import { Results } from "../models/GameResponse"

interface FavoritesContextModel {
    favorites: Results[];
    addFavorite: (game:Results) => void;
    removeFavorite: (game:Results) => void;
}

const defaultValue:FavoritesContextModel = {
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}

const FavoritesContext = createContext(defaultValue)

export default FavoritesContext;
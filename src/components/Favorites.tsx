import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

import { Results } from "../models/GameResponse";

export default function Favorites() {
    const {favorites} = useContext(FavoritesContext);

    return (
        <div>
            <h2>Favorite Games</h2>
            {favorites.length === 0 ? (
            <p>No favorites yet.</p>) : (
                <ul>
                    {favorites.map((game: Results, index: number) => (
                    <li key={index}>
                        <h3>{game.name}</h3>
                        <img src={game.background_image} alt={game.name} />
                    </li>
                    ))}
                </ul>
                )}
        </div>
    )
}
import axios from "axios";
import { GameResponse,Results } from "../models/GameResponse";
const apiKey = process.env.REACT_APP_GAMING_API_KEY || "";

export function fetchGames(): Promise<Results[]> {
    return axios.get<GameResponse>(`https://api.rawg.io/api/games?key=${apiKey}`)
    .then((response) => {
        return response.data.results
    });
}
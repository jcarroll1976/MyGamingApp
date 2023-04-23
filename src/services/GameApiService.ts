import axios from "axios";
import { GameResponse,Results } from "../models/GameResponse";
const apiKey = process.env.REACT_APP_GAMING_API_KEY || "";

const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}`;


export function fetchGames(): Promise<Results[]> {
    return axios.get(baseUrl)
    .then((response) => response.data.results);
}
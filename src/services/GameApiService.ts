import axios from "axios";
import { GameResponse,Results } from "../models/GameResponse";
const apiKey = process.env.REACT_APP_GAMING_API_KEY || "";

const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}&dates=2023-01-01,2023-10-04&ordering=-released,rating&page_size=10`;


export function fetchGames(): Promise<Results[]> {
    return axios.get(baseUrl)
    .then((response) => response.data.results);
}
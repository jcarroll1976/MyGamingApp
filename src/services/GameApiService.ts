import axios from "axios";
import { Results } from "../models/GameResponse";
const apiKey = process.env.REACT_APP_GAMING_API_KEY || "";
const currentYear = new Date().getFullYear();

const baseUrl = `https://api.rawg.io/api/games?key=${apiKey}&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-released,rating&page_size=25`;


export function fetchGames(): Promise<Results[]> {
    return axios.get(baseUrl)
    .then((response) => response.data.results);
}
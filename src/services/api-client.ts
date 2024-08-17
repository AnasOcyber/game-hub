import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseURL = import.meta.env.VITE_RAPID_API_URL;
const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;

export default axios.create({
  baseURL: baseURL,
  params: {
    key: apiKey,
  },
  headers: {
    "x-rapidapi-key": rapidApiKey,
    "x-rapidapi-host": rapidApiHost,
  },
});

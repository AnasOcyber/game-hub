import axios from "axios";

const apiKey = process.env.RAWG_API_KEY;
const baseURL = process.env.RAPID_API_URL;
const rapidApiKey = process.env.RAPID_API_KEY;
const rapidApiHost = process.env.RAPID_API_HOST;

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

import axios from "axios";

// const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: "https://rawg-video-games-database.p.rapidapi.com",
  params: {
    key: "1cb2bf18f39244e5945fbfd2701df8c5",
  },
  headers: {
    "x-rapidapi-key": "8d1e4d4a9fmshf2531737a3bc182p1be429jsnfaaf93c55128",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
  },
});

import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiKey = import.meta.env.VITE_RAWG_API_KEY;
const baseURL = import.meta.env.VITE_RAPID_API_URL;
const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;

const axiosInstance = axios.create({
  baseURL: baseURL,
  params: {
    key: apiKey,
  },
  headers: {
    "x-rapidapi-key": rapidApiKey,
    "x-rapidapi-host": rapidApiHost,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  findAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };
}

export default APIClient;

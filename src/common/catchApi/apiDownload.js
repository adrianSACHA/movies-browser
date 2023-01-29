import axios from "axios";
import { apiKey, apiBaseUrl, language } from "./apiValue";

export const getMovies = async (page) => {
    const response = await axios.get(
      `${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=${page}${language}`
    );
  
    return await response.data;

  };
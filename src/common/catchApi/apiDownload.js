import axios from "axios";
import { apiKey, apiBaseUrl, language } from "./apiValue";

export const getMovies = async (page) => {
    const response = await axios.get(
        `${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=${page}${language}`
    );

    return await response.data;
};

export const getMoviesByQuery = async (query, page) => {
    if (!query) {
        return;
    }
    const response = await axios.get(
        `${apiBaseUrl}/search/movie?api_key=${apiKey}${language}&query=${query}&page=${page}`
    );

    return await response.data;
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(
        `${apiBaseUrl}/movie/${id}?api_key=${apiKey}${language}`
    );

    return await response.data;
};

export const getGenres = async () => {
    const response = await axios.get(
        `${apiBaseUrl}/genre/movie/list?api_key=${apiKey}`
    );

    return await response.data;
};

export const getPeople = async (page) => {
    const response = await axios.get(
        `${apiBaseUrl}/person/popular?api_key=${apiKey}&page=${page}${language}`
    );

    return await response.data;
};

export const getPeopleByQuery = async (query, page) => {
    if (!query) {
        return;
    }
    const response = await axios.get(
        `${apiBaseUrl}/search/person?api_key=${apiKey}${language}&query=${query}&page=${page}`
    );

    return await response.data;
}

export const getPersonDetails = async (id) => {
    const response = await axios.get(
        `${apiBaseUrl}/person/${id}?api_key=${apiKey}${language}`
    );

    return await response.data;
};

export const getPersonCredits = async (id) => {
    const response = await axios.get(
        `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}${language}`
    );

    return await response.data;
};

export const getCredits = async (id) => {
    const response = await axios.get(
        `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}${language}`
    );

    return await response.data;
};
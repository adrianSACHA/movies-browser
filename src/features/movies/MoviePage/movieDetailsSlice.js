import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        status: "loading",
        movieDetails: [],
        movieId: null,
        credits: [],
    },
    reducers: {
        fetchMovieDetails: () => ({
            status: "loading",
        }),
        fetchMovieDetailsSuccess: (_, { payload: movieDetails }) => ({
            status: "success",
            movieDetails: [movieDetails],
        }),
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchMovieDetailsError: () => ({
            status: "error",
        }),
        fetchCredits: () => ({
            status: "loading",
        }),
        fetchCreditsSuccess: (_, { payload: credits }) => ({
            status: "success",
            credits: [credits],
        }),
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    setMovieId,
    fetchMovieDetailsError,
    fetchCredits,
    fetchCreditsSuccess,
} = movieDetailsSlice.actions;

const selectMovieState = state => state.movieDetails;

export const selectMovieStatus = state => selectMovieState(state).status;
export const selectMovieId = state => selectMovieState(state).movieId
export const selectMovieCast = state => selectMovieState(state).credits.cast;
export const selectMovieCrew = state => selectMovieState(state).credits.crew;

export default movieDetailsSlice.reducer;
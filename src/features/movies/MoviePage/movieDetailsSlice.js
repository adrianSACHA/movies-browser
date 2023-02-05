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
        fetchMovieDetails: (state) => {
            state.movieDetails = [];
            state.status = "loading";
        },
        fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
            state.status = "success";
            state.movieDetails = movieDetails;
        },
        setMovieId: (state, { payload: id }) => {
            state.movieId = id;
        },
        fetchMovieDetailsError: (state) => {
            state.status = "error";
        },
        fetchCredits: (state) => {
            state.status = "loading";
        },
        fetchCreditsSuccess: (state, { payload: credits }) => {
            state.credits = credits;
        },
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


const selectMovieDetailsState = (state) => state.movieDetails;

export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;

export const selectMovieStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;
export const selectMovieCast = (state) => selectMovieDetailsState(state).credits.cast;
export const selectMovieCrew = (state) => selectMovieDetailsState(state).credits.crew;

export default movieDetailsSlice.reducer;
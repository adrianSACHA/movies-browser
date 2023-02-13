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
        fetchCredits: (state) => {
            state.status = "loading";
        },
        fetchCreditsSuccess: (state, { payload: credits }) => {
            state.status = "success";
            state.credits = credits;
        },
        fetchError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    setMovieId,
    fetchCredits,
    fetchCreditsSuccess,
    fetchError,
} = movieDetailsSlice.actions;


const selectMovieDetailsState = (state) => state.movieDetails;

export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;
export const selectMovieStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;
export const selectMovieCredits = (state) => selectMovieDetailsState(state).credits;

export default movieDetailsSlice.reducer;
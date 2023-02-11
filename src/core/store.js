import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import movieListReducer from "../features/movies/MovieList/movieListSlice";
import movieDetailsReducer from "../features/movies/MoviePage/movieDetailsSlice";
import personDetailsReducer from "../features/people/PersonPage/personDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        movieDetails: movieDetailsReducer,
        personDetails: personDetailsReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
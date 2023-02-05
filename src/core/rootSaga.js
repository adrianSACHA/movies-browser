import { all } from "redux-saga/effects";
import { watchFetchMovieDetails } from "../features/movies/MoviePage/movieDetailsSaga";

export default function* rootSaga() {
    yield all([watchFetchMovieDetails])
};
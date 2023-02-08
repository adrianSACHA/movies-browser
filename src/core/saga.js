import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";
import { movieDetailsSaga } from "../features/movies/MoviePage/movieDetailsSaga";

export default function* saga() {
    yield all([movieListSaga(), movieDetailsSaga()]);
}
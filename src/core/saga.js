import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";

export default function* saga() {
    yield all([movieListSaga()]);
}
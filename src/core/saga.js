import { all } from "redux-saga/effects";
import { movieListSaga } from "../features/movies/MovieList/movieListSaga";
import { movieDetailsSaga } from "../features/movies/MoviePage/movieDetailsSaga";
import { personDetailsSaga } from "../features/people/PersonPage/personDetailsSaga";
import { peopleListSaga } from "../features/people/PeopleList/peopleListSaga";

export default function* saga() {
    yield all([
        movieListSaga(), 
        movieDetailsSaga(),
        peopleListSaga(),
        personDetailsSaga(),
    ]);
}
import { call, put, takeEvery } from "redux-saga/effects";
import { getMovieDetails } from "../../../common/catchApi/apiDownload";
import {
    fetchMovieDetails,
    fetchMovieDetailsError,
    fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";


function* fetchMovieDetailsHandler({ payload: id }) {
    try {
        const movieDetails = yield call(getMovieDetails());
        yield put(fetchMovieDetailsSuccess({movieDetails}));
    } catch (error) {
        yield put(fetchMovieDetailsError());
    }
}

export function* watchFetchMovieDetails() {
    yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
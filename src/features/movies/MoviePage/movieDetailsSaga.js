import { call, put, takeLatest, delay, select } from "redux-saga/effects";
import { getMovieDetails, getCredits } from "../../../common/catchApi/apiDownload";
import { loadingDelay } from "../../../common/states/loadingDelay";
import {
    fetchCredits,
    fetchCreditsSuccess,
    fetchMovieDetails,
    fetchMovieDetailsError,
    fetchMovieDetailsSuccess,
    selectMovieId,
} from "./movieDetailsSlice";



function* fetchMovieDetailsHandler() {
    try {
        yield delay(loadingDelay);
        const id = yield select(selectMovieId);
        const movieDetails = yield call(getMovieDetails, id);
        yield put(fetchMovieDetailsSuccess(movieDetails));
        yield put(fetchCredits());
    } catch (error) {
        yield put(fetchMovieDetailsError());
    }
}

function* fetchCreditsHandler() {
    try {
        const id = yield select(selectMovieId);

        const credits = yield call(getCredits, id);
        yield put(fetchCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchMovieDetailsError());
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
import { call, put, takeLatest, delay, select } from "redux-saga/effects";
import { getPersonDetails, getPersonCredits } from "../../../common/catchApi/apiDownload";
import { loadingDelay } from "../../../common/states/loadingDelay";
import {
    fetchPersonCredits,
    fetchPersonCreditsSuccess,
    fetchPersonDetails,
    fetchPersonDetailsSuccess,
    fetchError,
    selectPersonId,
} from "./personDetailsSlice";

function* fetchPersonDetailsHandler() {
    try {
        yield delay(loadingDelay);
        const id = yield select(selectPersonId);
        const personDetails = yield call(getPersonDetails, id);
        yield put(fetchPersonDetailsSuccess(personDetails));
        yield put(fetchPersonCredits());
    } catch (error) {
        yield put(fetchError());
    }
}

function* fetchPersonCreditsHandler() {
    try {
        const id = yield select(selectPersonId);
        const credits = yield call(getPersonCredits, id);
        yield put(fetchPersonCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchError());
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
    yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
}
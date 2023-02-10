import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  getPeople,
  getPeopleByQuery,
} from "../../../common/catchApi/apiDownload";
import { loadingDelay } from "../../../common/states/loadingDelay";
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError,
  selectPage,
  setPage,
  selectQuery,
} from "./peopleListSlice";

function* fetchPeopleHandler() {
  try {
    yield delay(loadingDelay);

    const page = yield select(selectPage);
    const query = yield select(selectQuery);
    const people = yield !query
      ? call(getPeople, page)
      : call(getPeopleByQuery, query, page);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest([fetchPeople.type, setPage.type], fetchPeopleHandler);
}

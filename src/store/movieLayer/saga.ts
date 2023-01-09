import {call, put, takeLeading} from "redux-saga/effects";
import {detailApi, listApi, searchApi, topApi} from "./api";
import {addContentDetail, addContentList, addSearchList, addSearchValue, addTopList} from "./slise";
import {getContentDetails, getContentList, getTopList, searchValue} from "./actions";
import {IDetailResponse, IListResponse, ISearchResponse} from "../../types/types";


export function* getMoviesSaga() {
  yield takeLeading(getContentList, getMoviesWorker);
}

function* getMoviesWorker(action: any) {
  const {format, sorted, page} = action.payload
  try {
    const content: IListResponse = yield call(listApi, format, sorted, page);
    yield put(addContentList({format, content}));
  } catch (err) {
    console.log(err);
  }

}


export function* getDetailsSaga() {
  yield takeLeading(getContentDetails, getDetailsWorker);
}

function* getDetailsWorker(action: any) {
  const {format, id} = action.payload
  try {
    const detail: IDetailResponse = yield call(detailApi, format, id);
    yield put(addContentDetail(detail));
  } catch (err) {
    console.log(err);
  }
}


export function* searchSaga() {
  yield takeLeading(searchValue, searchWorker);
}

function* searchWorker(action: any) {
  const {query, page} = action.payload
  try {
    const searchContent: ISearchResponse = yield call(searchApi, query, page);
    yield put(addSearchValue(query));
    yield put(addSearchList(searchContent));
  } catch (err) {
    console.log(err);
  }
}


export function* topListSaga() {
  yield takeLeading(getTopList, topListWorker);
}

function* topListWorker() {
  try {
    const topListContent: {} = yield call(topApi)
    yield put(addTopList(topListContent));
  } catch (err) {
    console.log(err);
  }
}
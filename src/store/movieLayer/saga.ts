import {call, put, takeLeading} from "redux-saga/effects";
import {detailApi, listApi, searchApi} from "./api";
import {addContentDetail, addContentList, addSearchList, addSearchValue} from "./slise";
import {getContentDetails, getContentList, searchValue} from "./actions";
import {DetailResponse, ListResponse} from "../../types/types";


export function* getMoviesSaga() {
	yield takeLeading(getContentList, getMoviesWorker);
}

function* getMoviesWorker(action: any) {
	const {format, page} = action.payload
	try {
		const content: ListResponse = yield call(listApi, format, page);
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
		const detail: DetailResponse = yield call(detailApi, format, id);
		yield put(addContentDetail(detail));
	} catch (err) {
		console.log(err);
	}
}


export function* searchSaga() {
	yield takeLeading(searchValue, searchWorker);
}

function* searchWorker(action: any) {
	console.log(action.payload)
	const {query, page} = action.payload
	try {
		const searchList: object = yield call(searchApi, query, page);
		yield put(addSearchValue(query));
		yield put(addSearchList(searchList));
	} catch (err) {
		console.log(err);
	}
}
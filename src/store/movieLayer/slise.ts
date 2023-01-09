import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContentList, IDetailResponse, ISearchResponse} from "../../types/types";

interface ICounterState {
  contentList: object;
  detail: object;
  format: string;
  searchList: object;
  searchValue: string;
  sort: string;
  topList: object;
}

const initialState = {
  contentList: {page: 1},
  detail: {},
  format: "movie",
  searchList: {},
  searchValue: '',
  sort: 'popularity',
  topList: {}
} as ICounterState;

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addContentList(state, action: PayloadAction<IContentList>) {
      const {format, content} = action.payload
      state.contentList = content;
      state.format = format;
    },

    addContentDetail(state, action: PayloadAction<IDetailResponse>) {
      state.detail = action.payload
    },

    clearDetail(state, action: PayloadAction<object>) {
      state.detail = action.payload
    },

    changeFormat(state, action: PayloadAction<string>) {
      state.format = action.payload
    },

    changeSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },

    addSearchList(state, action: PayloadAction<ISearchResponse>) {
      state.searchList = action.payload
    },

    addSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },

    addTopList(state, action) {
      state.topList = action.payload
    }
  },

});

export const {
  addContentList,
  addContentDetail,
  addSearchValue,
  addSearchList,
  clearDetail,
  changeSort,
  addTopList
} = movieSlice.actions;

export default movieSlice.reducer;

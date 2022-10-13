import {createSelector} from "@reduxjs/toolkit";

const movie = (state: any) => state;

export const contentSelector = createSelector(
  movie,
  (state) => state.movie.contentList
);

export const detailSelector = createSelector(
  movie,
  (state) => state.movie.detail
)

export const topSelector = createSelector(
  movie,
  (state) => state.movie.topList
)

export const sortedSelector = createSelector(
  movie,
  (state) => state.movie.sort
)

export const searchQuerySelector = createSelector(
  movie,
  (state) => state.movie.searchValue
)

export const searchListSelector = createSelector(
  movie,
  (state) => state.movie.searchList
)

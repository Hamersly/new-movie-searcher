import {createSelector} from "@reduxjs/toolkit";

const movie = (state: any) => state;

export const allSelector = createSelector(movie, (state) => {
	console.log(state.movie)
	return state.movie
});

export const contentSelector = createSelector(
	movie,
	(state) => state.movie.content
);

export const formatSelector = createSelector(
	movie,
	(state) => state.movie.format
);

export const detailSelector = createSelector(
	movie,
	(state) => state.movie.detail
)

export const searchQuerySelector = createSelector(
	movie,
	(state) => state.movie.searchValue
)

export const searchListSelector = createSelector(
	movie,
	(state) => state.movie.searchList
)

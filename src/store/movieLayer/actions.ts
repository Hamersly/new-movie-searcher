import {createAction} from "@reduxjs/toolkit";

export const getContentList =
  createAction<{ format: string; sorted: string; page: number }>("getContentList");

export const getContentDetails = createAction<{ format: string; id: string }>("getContentDetails")

export const getTopList = createAction("getTopList")

export const searchValue = createAction<{ query: string; page: number }>("searchValue")


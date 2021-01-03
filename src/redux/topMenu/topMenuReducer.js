import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { openTopMenuList, closeTopMenuList, openTopMenuItem, closeTopMenuItem } from "./actionTopMenu";

const reducerTopMenuList = createReducer("", {
	[openTopMenuList]: (_, { payload }) => payload, // id
	[closeTopMenuList]: () => "", // ''
});

const reducerTopMenuItem = createReducer("", {
	[openTopMenuItem]: (_, { payload }) => payload,
	[closeTopMenuItem]: () => "",
});

export default combineReducers({
    list: reducerTopMenuList,
    item: reducerTopMenuItem,
}) 

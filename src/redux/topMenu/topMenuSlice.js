import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: "",
	item: "",
};

const topMenuSlice = createSlice({
	name: "topMenu",
	initialState,
	reducers: {
		openList(state, { payload }) {
			state.list = payload;
		},
		closeList(state, { payload }) {
			state.list = "";
		},
		openItem(state, { payload }) {
			state.item = payload;
		},
		closeItem(state, { payload }) {
			state.item = "";
		},
	},
});

export default topMenuSlice.reducer;
export const { openList, closeList, openItem, closeItem } = topMenuSlice.actions;

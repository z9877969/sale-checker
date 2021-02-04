import { createSlice } from "@reduxjs/toolkit";
import nanoid from "nanoid";

const todosSlice = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: {
			reducer: (state, action) => {
				state.push(action.payload);
			},
			prepare: text => {
				const id = nanoid();
				return { payload: { id, text } };
			},
		},
	},
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;

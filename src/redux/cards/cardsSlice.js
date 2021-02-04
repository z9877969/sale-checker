import { createSlice } from "@reduxjs/toolkit";

const getCardById = (state, id) => state.find(el => el.id === id);
const removeCardById = (state, id) => state.filter(card => card.id !== id); // update state removed card by id

export const sliceOpenCards = createSlice({
	name: "ctrlCardsShow",
	initialState: [],
	reducers: {
		openCard(state, { payload }) {
			const cardById = getCardById(state, payload);
			return cardById
				? [{ ...cardById, status: "open" }, ...removeCardById(state, payload)]
				: [{ id: payload, status: "open" }, ...state];
			// const idx = state.indexOf(payload);
			// idx !== -1 ? state.splice(idx, 1, { ...state[idx], status: "open" }) : state.push({ id: payload, status: "open" });
		},
		turnCard(state, { payload }) {
			const cardById = getCardById(state, payload);
			return cardById
				? [{ ...cardById, status: "turn" }, ...removeCardById(state, payload)]
				: [{ ...cardById, status: "turn" }, ...state];
		},
		closeCard(state, { payload }) {
			return state.filter(el => el.id !== payload);
		},
		addCardTitle(state, { payload }) {
			const { title, id } = payload;
			const cardById = getCardById(state, id);
			const cardWithTitle = { ...cardById, title };
			return [...removeCardById(state, id), cardWithTitle];
		},
	},
});

export default sliceOpenCards.reducer;
export const { openCard, turnCard, closeCard, addCardTitle } = sliceOpenCards.actions;

import { createSlice } from "@reduxjs/toolkit";

const getCardByName = (state, cardName) => state.find(el => el.id === cardName);
const removeCardByName = (state, cardName) => state.filter(card => card.id !== cardName); // update state removed card by id

export const sliceOpenCards = createSlice({
	name: "ctrlCardsShow",
	initialState: [],
	reducers: {
		openCard(state, { payload }) {
			const cardById = getCardByName(state, payload);
			return cardById
				? [{ ...cardById, status: "open" }, ...removeCardByName(state, payload)]
				: [{ id: payload, status: "open" }, ...state];
		},
		turnCard(state, { payload }) {
			const cardById = getCardByName(state, payload);
			return cardById
				? [{ ...cardById, status: "turn" }, ...removeCardByName(state, payload)]
				: [{ ...cardById, status: "turn" }, ...state];
		},
		closeCard(state, { payload }) {
			return state.filter(el => el.id !== payload);
		},
		addCardTitle(state, { payload }) {
			const { title, cardName } = payload;
			const cardById = getCardByName(state, cardName);
			const cardWithTitle = { ...cardById, title };
			return [...removeCardByName(state, cardName), cardWithTitle];
		},
		cardDataSubmit(state, { payload }) {
			const { cardName, ...rest } = payload;
			getCardByName(state, payload.cardName);
			return state.map(card => (card.id === cardName ? { ...card, data: { ...rest } } : card));
		},
	},
});

export default sliceOpenCards.reducer;
export const { openCard, turnCard, closeCard, addCardTitle, cardDataSubmit } = sliceOpenCards.actions;

import { createReducer } from "@reduxjs/toolkit";
import * as actionsCard from "./actionOpenCard";
// const initialState = [];

const getCardById = (state, id) => state.find(el => el.id === id);
const removeCardById = (state, id) => state.filter(card => card.id !== id); // update state removed card by id

const updateOpenCard = (state, { payload }) => {
	const cardById = getCardById(state, payload);
	return cardById
	? [{ ...cardById, status: "open" }, ...removeCardById(state, payload)]
	: [{ id: payload, status: "open" }, ...state];
}

const updateTurnedCard = (state, { payload }) => {
	const cardById = getCardById(state, payload);
	return cardById
	? [{ ...cardById, status: "turn" }, ...removeCardById(state, payload)]
	: [{ ...cardById, status: "turn" }, ...state];
}

const addCardTitle = (state, {payload}) => {
	const {title, id} = payload;
	const cardById = getCardById(state, id);
	const cardWithTitle = {...cardById, title};
	return [...removeCardById(state, id), cardWithTitle];
}

export const reducerOpenCards = createReducer([], {
	[actionsCard.openCard]: updateOpenCard,
	[actionsCard.turnCard]: updateTurnedCard,
	[actionsCard.closeCard]: (state, { payload }) => state.filter(el => el.id !== payload),
	[actionsCard.addCardTitle]: addCardTitle,
});

// export const cardsReducer = combineReducers({
// 	cards,
// });

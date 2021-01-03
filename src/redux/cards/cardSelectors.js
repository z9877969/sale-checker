// import { createSelector } from "@reduxjs/toolkit";

const getCards = state => state.activeStateEls.openCards;
const getCardsIds = state => getCards(state).map(card => card.id);
const getCardsSet = state => getCards(state).map(card => ({id: card.id, status: card.status}));
const getTurnCards = state => getCards(state).filter(card => card.status === "turn")
const getActiveCard = (state, id) => getCards(state).find(card => card.id === id);

export {
    getCards,
    getCardsIds,
    getActiveCard,
    getTurnCards,
    getCardsSet,
}
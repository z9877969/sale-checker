import { createAction } from "@reduxjs/toolkit";

const openCard = createAction("open/card");
const turnCard = createAction("turn/card");
const closeCard = createAction("close/card");
const addCardTitle = createAction("add/cardTitle")

export {
	openCard,
	turnCard,
	closeCard,
	addCardTitle,
};

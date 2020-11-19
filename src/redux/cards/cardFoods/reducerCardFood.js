export const ActionType = {
    IS_CARD_FOODS_OPEN: "IS_CARD_FOODS_OPEN",
}

export const isCardFoodOpenReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionType.IS_CARD_FOODS_OPEN:
            return payload;   
        default:
            return state;
    }
}

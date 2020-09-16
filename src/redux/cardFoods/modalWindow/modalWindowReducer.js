import {combineReducers} from 'redux';

export const ActionType = {
    IS_CARD_FOODS_OPEN: "IS_CARD_FOODS_OPEN",
}

const isCardFoodsOpenReducer = (state = true, {type, payload}) => {
    switch (type) {
        case ActionType.IS_CARD_FOODS_OPEN:
            return payload;
    
        default:
            return state;
    }
}

export const modalWindowReducer = combineReducers({
    isCardOpen: isCardFoodsOpenReducer,
})
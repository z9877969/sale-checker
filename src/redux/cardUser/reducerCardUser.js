import {combineReducers} from 'redux';

export const ActionType = {
    IS_CARD_USER_OPEN: "IS_CARD_USER_OPEN", 
}

export const isCardUserOpenReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionType.IS_CARD_USER_OPEN:
            return payload;
    
        default:
            return state;
    }
}
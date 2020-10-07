export const ActionType = {
    IS_CARD_USER_OPEN: "IS_CARD_USER_OPEN", 
}

export const isCardCustomerOpenReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionType.IS_CARD_USER_OPEN:
            return payload;
    
        default:
            return state;
    }
}
const initialState = [];

export const ActionType = {
    OPEN_TOP_MENU_LIST: "OPEN_TOP_MENU_LIST",
    CLOSE_TOP_MENU_LIST: "CLOSE_TOP_MENU_LIST",
};

export const reducerOpenTopMenuList = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.OPEN_TOP_MENU_LIST:
            return [...state, payload];    
        case ActionType.CLOSE_TOP_MENU_LIST:
            return state.filter(el => el.id !== payload) 
        default:
            return state;
    }
};
export const ActionType = {
    IS_TOP_MENU_LIST_OPEN: "IS_TOP_MENU_LIST_OPEN",
};

const initial = {
    id: "",
    isOpen: false,
}

export const reducerIsTopMenuListOpen = (state = initial, {type, payload}) => {
    switch (type) {
        case ActionType.IS_TOP_MENU_LIST_OPEN:
            return payload;    
        default:
            return state;
    }
};
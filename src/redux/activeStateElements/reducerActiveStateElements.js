// import {combineReducers} from 'redux';

const initialState = [];

// initialState
// {
//     id: "",
//     activeState: {
//         action: '',
//         isActive: false,
//     },
// }

const getActiveEl = (state, payload) => state.find(el => el.id === payload.id) ? 
                    [...state.filter(el => el.id !== payload.id), payload] : 
                    [...state, payload];

export const ActionType = {
    OPEN_ACTIVE_STATE_EL: "OPEN_ACTIVE_STATE_EL",
    CLOSE_ACTIVE_STATE_EL: "CLOSE_ACTIVE_STATE_EL",
}

export const reducerActiveStateEls = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.OPEN_ACTIVE_STATE_EL:
            return getActiveEl(state, payload);
        case ActionType.CLOSE_ACTIVE_STATE_EL:
            return [...state].filter(el => el.id !== payload);
        default:
            return state;
    }
};
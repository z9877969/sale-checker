const initialState = [];

export const ActionType = {
    OPEN_CARD: "OPEN_CARD",
    TURN_CARD: "TURN_CARD",
    CLOSE_CARD: "CLOSE_CARD",
}

const updateActionActiveEl = (state, payload) => state.find(el => {
    return el.id === payload.id}) ? 
                    [payload, ...state.filter(el => el.id !== payload.id)] : 
                    [payload, ...state];

export const reducerOpenCards = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionType.OPEN_CARD:
            console.log('payload_OPEN_Card :>> ', payload);
            return updateActionActiveEl(state, payload);
        case ActionType.TURN_CARD:
            return updateActionActiveEl(state, payload);
        case ActionType.CLOSE_CARD:
            return state.filter(el => el.id !== payload);
        default:
            return state;
    }
};
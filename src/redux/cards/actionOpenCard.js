import {ActionType} from './reducerOpenCard';

// // helpers
// const getActionTruePayload = payload => {
//     const payloadInside = {id: payload.id};
//     payloadInside[payload.action] = true;
//     return payloadInside;
// }

export const actionOpenCard = (payload) => ({
    type: ActionType.OPEN_CARD,
    payload: payload
});

export const actionTurnCard = (payload) => ({
    type: ActionType.TURN_CARD,
    payload: payload
});

export const actionCloseCard = (id) => ({
    type: ActionType.CLOSE_CARD,
    payload: id,
})
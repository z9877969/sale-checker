// import {ActionType} from './reducerActiveStateElements';

// // helpers
// const getActionTruePayload = payload => {
//     const payloadInside = {id: payload.id};
//     payloadInside[payload.action] = true;
//     return payloadInside;
// }

// export const actionOpenEl = (payload) => ({
//     type: ActionType.OPEN_ACTIVE_STATE_EL,
//     // payload: getActionTruePayload(payload),
//     payload: payload
// });

// export const actionTurnEl = (payload) => ({
//     type: ActionType.TURN_ACTIVE_STATE_EL,
//     payload: payload
// });

// export const actionCloseEl = (id) => ({
//     type: ActionType.CLOSE_ACTIVE_STATE_EL,
//     payload: id,
// })
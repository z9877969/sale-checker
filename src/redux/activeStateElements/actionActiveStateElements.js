import {ActionType} from './reducerActiveStateElements';

// const getActiveState = (activeState) => {
//     const {action} = activeState;
//     const activeStateList = Object.keys(activeState);
//     // if(activeStateList.includes(isOpen)) return isOpen;
//     // if(activeStateList.includes(isFullSize)) return isFullSize;
//     // if(activeStateList.includes(isTurn)) return isTurn;

//     // const {open, fullSize, turn} = activeState;
//     // const activeStateList = Object.keys(activeState);
//     // if(activeStateList.includes("open")) return "open";
//     // if(activeStateList.includes("fullSize")) return "fullSize";
//     // if(activeStateList.includes('turn')) return 'turn';
// }

// helpers
const getActionTruePayload = payload => {
    const payloadInside = {id: payload.id};
    payloadInside[payload.action] = true;
    return payloadInside;
}

export const actionOpenEl = (payload) => ({
    type: ActionType.OPEN_ACTIVE_STATE_EL,
    payload: getActionTruePayload(payload),
});

export const actionCloseEl = (id) => ({
    type: ActionType.CLOSE_ACTIVE_STATE_EL,
    payload: id,
})
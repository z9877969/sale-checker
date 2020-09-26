import {ActionType} from './reducerCardUser';

export const actionIsCardUserOpen = isOpen => ({
    type: ActionType.IS_CARD_USER_OPEN,
    payload: isOpen,
})
import {ActionType} from './reducerTopMenu';

export const actionIsTopMenuListOpen = ({id, isOpen}) => ({
    type: ActionType.IS_TOP_MENU_LIST_OPEN,
    payload: {id, isOpen},
});
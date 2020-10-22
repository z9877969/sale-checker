import {ActionType} from './reducerTopMenu';

export const actionOpenTopMenu = (payload) => ({
    type: ActionType.OPEN_TOP_MENU_LIST,
    payload: payload    
});

export const actionCloseTopMenu = (id) => ({
    type: ActionType.CLOSE_TOP_MENU_LIST,
    payload: id,
})
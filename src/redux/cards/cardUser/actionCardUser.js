import {ActionType} from './reducerCardCustomer';

export const actionIsCardCustomerOpen = isOpen => ({
    type: ActionType.IS_CARD_USER_OPEN,
    payload: isOpen,
})
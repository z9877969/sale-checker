import {ActionType} from './reducerCardFood';

export const actionIsCardFoodOpen = value => ({
    type:ActionType.IS_CARD_FOODS_OPEN,
    payload: value,
});
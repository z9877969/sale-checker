import {ActionType} from './modalWindowReducer';

export const actionIsCardFoodsOpen = value => ({
    type:ActionType.IS_CARD_FOODS_OPEN,
    payload: value,
});
// export const actionCardFoodsOpen = () => ({
//     type:ActionType.CARD_FOODS_OPEN,
//     payload: true,
// });


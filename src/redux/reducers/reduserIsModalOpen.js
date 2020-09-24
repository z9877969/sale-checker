import {combineReducers} from 'redux';
import {isCardFoodOpenReducer} from '../cardFoods/cardFoodsReducer';

export const reducerIsCardsOpen = combineReducers({
    isCardFoodOpen: isCardFoodOpenReducer,
    isCardUserOpen: isCardUserOpenReducer,
})
import {combineReducers} from 'redux';
import {isCardFoodOpenReducer} from '../cardFoods/reducerCardFood';
import {isCardUserOpenReducer} from '../cardUser/reducerCardUser';

export const reducerIsCardsOpen = combineReducers({
    food: isCardFoodOpenReducer,
    user: isCardUserOpenReducer,
})
import {combineReducers} from 'redux';
import {isCardFoodOpenReducer} from './cardFoods/reducerCardFood';
import {isCardCustomerOpenReducer} from './cardCustomer/reducerCardCustomer';

export const reducerIsCardsOpen = combineReducers({
    food: isCardFoodOpenReducer,
    user: isCardCustomerOpenReducer,
})
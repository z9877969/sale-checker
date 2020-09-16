import {combineReducers} from 'redux';
import {modalWindowReducer} from './modalWindow/modalWindowReducer';


const cardFoodsReduser = combineReducers({
    modalWindow: modalWindowReducer,
});

export default cardFoodsReduser;
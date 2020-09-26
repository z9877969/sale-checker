import {combineReducers} from 'redux';
import {reducerIsCardsOpen} from '../cards/reducerIsCardsOpen';
import {reducerIsTopMenuListOpen} from '../topMenu/reducerTopMenu';


const reducerIsOpen = combineReducers({
    cards: reducerIsCardsOpen,
    menu: reducerIsTopMenuListOpen,
})

export default reducerIsOpen;
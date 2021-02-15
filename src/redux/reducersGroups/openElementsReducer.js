import {combineReducers} from '@reduxjs/toolkit';
import reducerOpenCards from '../cards/cardsSlice';
import reducerTopMenu from '../topMenu/topMenuSlice';

export const reducerActiveStateEls = combineReducers({
    cards: reducerOpenCards,
    topMenu: reducerTopMenu,
})
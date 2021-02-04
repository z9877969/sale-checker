// import {combineReducers} from 'redux';
import {combineReducers} from '@reduxjs/toolkit';
// import {reducerOpenCards} from '../cards/cardsReducer'; // comment before import slice
import reducerOpenCards from '../cards/cardsSlice';
import reducerTopMenu from '../topMenu/topMenuReducer';

export const reducerActiveStateEls = combineReducers({
    openCards: reducerOpenCards,
    openTopMenu: reducerTopMenu,
})
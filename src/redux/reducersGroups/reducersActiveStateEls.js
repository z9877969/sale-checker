// import {combineReducers} from 'redux';
import {combineReducers} from '@reduxjs/toolkit';
import {reducerOpenCards} from '../cards/cardsReducer';
import reducerTopMenu from '../topMenu/topMenuReducer';

export const reducerActiveStateEls = combineReducers({
    openCards: reducerOpenCards,
    openTopMenu: reducerTopMenu,
})
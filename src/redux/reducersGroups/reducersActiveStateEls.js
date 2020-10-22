import {combineReducers} from 'redux';
import {reducerOpenCards} from '../cards/reducerOpenCard';
import {reducerOpenTopMenuList} from '../topMenu/reducerTopMenu';

export const reducerActiveStateEls = combineReducers({
    openCards: reducerOpenCards,
    openTopMenu: reducerOpenTopMenuList,
})
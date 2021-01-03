import {createAction} from '@reduxjs/toolkit';

const openTopMenuList = createAction('open/topMenuList');
const closeTopMenuList = createAction('close/topMenuList');
const openTopMenuItem = createAction('open/topMenuItem');
const closeTopMenuItem = createAction('close/topMenuItem');

export {
    openTopMenuList,
    closeTopMenuList,
    openTopMenuItem,
    closeTopMenuItem,
}
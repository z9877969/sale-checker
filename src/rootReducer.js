import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const sessionPersistConfig = {
//   key: 'session',
//   storage,
//   whitelist: ['token'],
// };

// const locationPersistConfig = {
//   key: 'location',
//   storage,
// };
// import {reducerActiveStateEls} from './redux/activeStateElements/reducerActiveStateElements';
// import {reducerIsTopMenuListOpen} from './redux/topMenu/reducerTopMenu';
import {reducerActiveStateEls} from './redux/reducersGroups/reducersActiveStateEls';

const rootReducer = combineReducers({
    activeStateEls: reducerActiveStateEls,
});

export default rootReducer;
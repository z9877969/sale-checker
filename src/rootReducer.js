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
import {reducerIsCardsOpen} from './redux/reducers/reducerIsCardsOpen';

const rootReducer = combineReducers({
    isCardsOpen: reducerIsCardsOpen,
});

export default rootReducer;
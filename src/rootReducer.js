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
import reducerIsOpen from './redux/reducers/reducerIsOpen';

const rootReducer = combineReducers({
    isOpen: reducerIsOpen,
});

export default rootReducer;
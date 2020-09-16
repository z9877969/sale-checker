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
import cardFoodsReducer from './redux/cardFoods/cardFoodsReducer';

const rootReducer = combineReducers({
    cardFoods: cardFoodsReducer
});

export default rootReducer;
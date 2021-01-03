// import { createStore, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
import rootReducer from './rootReducer';

// const middlewares = process.env.NODE_ENV === 'development' ? [thunk] : [thunk];

export default configureStore({
  reducer: rootReducer,
})

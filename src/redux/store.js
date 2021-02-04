// import { createStore, applyMiddleware } from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default configureStore({
  reducer: rootReducer,
})

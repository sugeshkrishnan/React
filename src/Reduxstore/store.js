// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'; // if you are combining reducers

const store = configureStore({
  reducer: userReducer,  // or you can directly pass the reducer object if no combination
});

export default store;


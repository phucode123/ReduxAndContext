import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducer';

const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});

export default store;
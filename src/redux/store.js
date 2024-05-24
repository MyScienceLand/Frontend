import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import counterReducer from './slices/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import quizReducer from './slices/quizSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer,
  },
});

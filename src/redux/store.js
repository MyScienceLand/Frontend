import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import classesReducer from './slices/classesSlice.js';
import quizReducer from './slices/quizSlice';
import userReducer from './slices/userSlice.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    quiz: quizReducer,
    user: userReducer,
    classes: classesReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  quiz: null,
};

// Create the quiz slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateQuiz(state, action) {
      state.quiz = action.payload;
    },
  },
});

// Export actions
export const { updateQuiz } = quizSlice.actions;

// Export the reducer
export default quizSlice.reducer;

// /src/redux/slices/classesSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = null;

// Create the slice
const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    // Action to set the data for classes
    setClassesData(state, action) {
      return action.payload;
    },
    // Action to clear the data for classes
    clearClassesData() {
      return null;
    },
  },
});

// Export the actions
export const { setClassesData, clearClassesData } = classesSlice.actions;

// Export the reducer
export default classesSlice.reducer;

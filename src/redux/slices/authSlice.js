// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerStart(state) {
      state.status = 'loading';
    },
    registerUser(state, action) {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    },
    registerFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { registerStart, registerUser, registerFailure } =
  authSlice.actions;

export default authSlice.reducer;

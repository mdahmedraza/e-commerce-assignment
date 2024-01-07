
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload;
    },
    clearAuthData: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;

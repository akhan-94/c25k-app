import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {AppState} from './types/AppState';

const initialState: AppState = {
  session: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<AppState['session']>) => {
      const {payload} = action;
      state.session = payload;
    },
  },
});

export const {setSession} = appSlice.actions;

export const appReducer = appSlice.reducer;

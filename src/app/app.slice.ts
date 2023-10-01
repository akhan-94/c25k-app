import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {Session} from '@supabase/supabase-js';

export interface AppState {
  value: number;
  session: Session | null;
}

const initialState: AppState = {
  value: 0,
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

import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '@lib/redux';
import type {LoadingState} from '../types/LoadingState';

const initialState: LoadingState = {
  startup: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setStartupLoading: (state, action: PayloadAction<boolean>) => {
      state.startup = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;

export const selectLoadingState = (state: RootState) => state.loading;

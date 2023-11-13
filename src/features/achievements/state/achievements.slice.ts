import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '@lib/redux';
import type {AchievementsState} from '../types/AchievementsState';

const initialState: AchievementsState = {
  testing: 0,
};

export const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<AchievementsState>) => {
      state = {...state, ...action.payload};
    },
  },
});

export const {setState} = achievementsSlice.actions;

export const achievementsReducer = achievementsSlice.reducer;

export const selectAchievementsState = (state: RootState) => state.achievements;

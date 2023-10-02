import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RunState} from './types/RunState';
import type {RootState} from 'src/config/configureStore';

const initialState: RunState = {
  status: 'waiting',
  step: {
    active: 'warm-up',
  },
  activeDay: 0,
  calories: 0,
  distance: 0,
  duration: {
    elapsed: 0,
    remaining: 1800,
  },
};

export const runSlice = createSlice({
  name: 'run',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RunState['status']>) => {
      const {payload} = action;
      state.status = payload;
    },
    setStep: (state, action: PayloadAction<RunState['step']['active']>) => {
      const {payload} = action;
      state.step.active = payload;
    },
    setActiveDay: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.activeDay = payload;
    },
    setCalories: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.calories = payload;
    },
    setDistance: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.distance = payload;
    },
    setElapsedDuration: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.duration.elapsed = payload;
    },
    setRemainingDuration: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.duration.remaining = payload;
    },
  },
});

export const {
  setStatus,
  setStep,
  setActiveDay,
  setCalories,
  setDistance,
  setElapsedDuration,
  setRemainingDuration,
} = runSlice.actions;

export const runReducer = runSlice.reducer;

export const selectRunState = (state: RootState) => state.run;

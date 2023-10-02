import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'src/config/configureStore';
import type {RunState} from '../types/RunState';

const initialState: RunState = {
  program: '10-week',
  status: 'waiting',
  stage: 'warm-up',
  progress: [0, 0, 0],
};

export const runSlice = createSlice({
  name: 'run',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<RunState['status']>) => {
      const {payload} = action;
      state.status = payload;
    },
    setProgram: (state, action: PayloadAction<RunState['program']>) => {
      const {payload} = action;
      state.program = payload;
    },
    setStage: (state, action: PayloadAction<RunState['stage']>) => {
      const {payload} = action;
      state.stage = payload;
    },
    setWeek: (state, action: PayloadAction<number>) => {
      const [, day, step] = state.progress;
      state.progress = [action.payload, day, step];
    },
    setDay: (state, action: PayloadAction<number>) => {
      const [week, , step] = state.progress;
      state.progress = [week, action.payload, step];
    },
    setStep: (state, action: PayloadAction<number>) => {
      const [week, day] = state.progress;
      state.progress = [week, day, action.payload];
    },
    setWeekAndDay: (state, action: PayloadAction<[number, number]>) => {
      const [week, day] = action.payload;
      const [, , step] = state.progress;
      state.progress = [week, day, step];
    },
  },
});

export const {
  setDay,
  setStatus,
  setStep,
  setWeek,
  setWeekAndDay,
  setProgram,
  setStage,
} = runSlice.actions;

export const runReducer = runSlice.reducer;

export const selectRunState = (state: RootState) => state.run;

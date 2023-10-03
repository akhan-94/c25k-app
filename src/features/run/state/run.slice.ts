import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'src/config/configureStore';
import type {RunState} from '../types/RunState';
import {PROGRAM_MAP} from '@shared/constants';

const initialState: RunState = {
  program: '10-week',
  status: 'waiting',
  stage: 'warm-up',
  timer: 300,
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
    setProgress: (state, action: PayloadAction<RunState['progress']>) => {
      const {payload} = action;
      state.progress = payload;
    },
    skipToNextStep: state => {
      const [week, day, step] = state.progress;
      const program = state.program;
      const details = PROGRAM_MAP[program][week][day];
      if (details.pattern[step + 1]) {
        const {time} = details.pattern[step + 1];
        state.progress = [week, day, step + 1];
        state.timer = time;
      } else {
        state.progress = [week, day, 0];
        state.status = 'finished';
      }
    },
    goBackToLastStep: state => {
      const [week, day, step] = state.progress;
      const program = state.program;
      const details = PROGRAM_MAP[program][week][day];
      if (details.pattern[step - 1]) {
        const {time} = details.pattern[step - 1];
        state.progress = [week, day, step - 1];
        state.timer = time;
      } else {
        state.progress = [week, day, 0];
        state.status = 'finished';
      }
    },
    setTimer: (state, action: PayloadAction<number>) => {
      const {payload} = action;
      state.timer = payload;
    },
    decrementTimer: state => {
      state.timer--;
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
  decrementTimer,
  setTimer,
  setProgress,
  skipToNextStep,
  goBackToLastStep,
} = runSlice.actions;

export const runReducer = runSlice.reducer;

export const selectRunState = (state: RootState) => state.run;

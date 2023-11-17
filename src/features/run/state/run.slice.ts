import type {RootState} from '@lib/redux';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {PROGRAM_MAP} from '@shared/constants';
import type {RunState} from '../types/RunState';

const initialState: RunState = {
  program: '10-week',
  status: 'waiting',
  stage: 'warm-up',
  timer: 300,
  progress: [0, 0, 0],
  speed: null,
  calories: null,
  distance: null,
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
    setTimerFromActiveStep(state) {
      const [week, day, step] = state.progress;
      const program = state.program;
      const {time} = PROGRAM_MAP[program][week][day].pattern[step];
      state.timer = time;
    },
    incrementDay: state => {
      state.progress[1]++;
    },
    decrementTimer: state => {
      state.timer--;
    },
    resetMetrics: state => {
      state.speed = null;
      state.calories = null;
      state.distance = null;
    },
    setMetricValue: (
      state,
      action: PayloadAction<
        [keyof Pick<RunState, 'calories' | 'distance' | 'speed'>, number]
      >,
    ) => {
      const [metric, value] = action.payload;
      state[metric] = value;
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
  setTimerFromActiveStep,
  incrementDay,
} = runSlice.actions;

export const runReducer = runSlice.reducer;

export const selectRunState = (state: RootState) => state.run;

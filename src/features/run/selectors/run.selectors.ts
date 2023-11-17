import {createSelector} from '@reduxjs/toolkit';
import {selectRunState} from '../state/run.slice';
import {PROGRAM_MAP} from '@shared/constants';
import {secondsIntoReadableTime} from '@shared/utils';

export const selectStatus = createSelector(
  selectRunState,
  ({status}) => status || 'waiting',
);

export const selectProgram = createSelector(
  selectRunState,
  ({program}) => program || '10-week',
);

export const selectTimer = createSelector(
  selectRunState,
  ({timer}) => timer || 300,
);

export const selectTimerAsFriendlyFormat = createSelector(selectTimer, timer =>
  secondsIntoReadableTime(timer),
);

export const selectProgress = createSelector(selectRunState, ({progress}) => {
  const [week, day, step] = progress;
  return {week, day, step};
});

export const selectProgramActiveDay = createSelector(
  selectProgram,
  selectProgress,
  (program, {week, day}) => {
    return PROGRAM_MAP[program][week][day];
  },
);

export const selectProgramActiveStep = createSelector(
  selectProgram,
  selectProgress,
  (program, {week, day, step}) => {
    return PROGRAM_MAP[program][week][day].pattern[step];
  },
);

export const selectActiveStage = createSelector(
  selectRunState,
  ({stage}) => stage || 'warm-up',
);

export const selectRemainingTime = createSelector(
  selectProgram,
  selectProgress,
  (program, {week, day, step}) => {
    return PROGRAM_MAP[program][week][day].pattern
      .slice(step + 1)
      .reduce((acc, step) => {
        return acc + step.time;
      }, 0);
  },
);

export const selectRemainingTimer = createSelector(
  selectRemainingTime,
  selectTimer,
  (remainingStepsTime, timer) => {
    return remainingStepsTime + timer;
  },
);

export const selectRunMetrics = createSelector(selectRunState, run => {
  const {speed, calories, distance} = run;
  return {speed, calories, distance} as const;
});

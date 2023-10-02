import {createSelector} from '@reduxjs/toolkit';
import {selectRunState} from './run.slice';
import {PROGRAM_MAP} from '@shared/constants';

export const selectStatus = createSelector(
  selectRunState,
  ({status}) => status || 'waiting',
);

export const selectProgram = createSelector(
  selectRunState,
  ({program}) => program || '10-week',
);

export const selectProgress = createSelector(selectRunState, ({progress}) => {
  const [week, day, step] = progress;
  return {week, day, step};
});

export const selectProgramActiveDayDetails = createSelector(
  selectProgram,
  selectProgress,
  (program, {week, day}) => {
    return PROGRAM_MAP[program][week][day];
  },
);

export const selectActiveStep = createSelector(
  selectRunState,
  ({stage}) => stage || 'warm-up',
);

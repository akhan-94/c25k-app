import {createSelector} from '@reduxjs/toolkit';
import {selectRunState} from './run.slice';

export const selectStatus = createSelector(
  selectRunState,
  ({status}) => status,
);

export const selectActiveStep = createSelector(
  selectRunState,
  ({step}) => step?.active || 'warm-up',
);

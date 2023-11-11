import {createSelector} from '@reduxjs/toolkit';
import {selectAppState} from '../state/app.slice';

export const selectSession = createSelector(
  selectAppState,
  appState => appState.session,
);

export const selectSnackBar = createSelector(
  selectAppState,
  appState => appState.snackbar,
);

export const selectLoading = createSelector(
  selectAppState,
  appState => appState.loading,
);

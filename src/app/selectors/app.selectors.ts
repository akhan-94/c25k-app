import {createSelector} from '@reduxjs/toolkit';
import {selectAppState} from '../state/app.slice';
import {selectLoadingState} from '../state/loading.slice';

export const selectSession = createSelector(
  selectAppState,
  appState => appState.session,
);

export const selectSnackBar = createSelector(
  selectAppState,
  appState => appState.snackbar,
);

export const selectLoading = createSelector(
  selectLoadingState,
  state => state.startup,
);

export const selectUpdateRequired = createSelector(
  selectAppState,
  state => state.updateRequired,
);

export const selectGuestMode = createSelector(
  selectAppState,
  appState => appState.guestMode,
);

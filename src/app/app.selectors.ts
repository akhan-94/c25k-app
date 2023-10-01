import {createSelector} from '@reduxjs/toolkit';
import type {RootState} from '../config/configureStore';

const selectAppState = (state: RootState) => state.app;

export const selectSession = createSelector(
  selectAppState,
  appState => appState.session,
);

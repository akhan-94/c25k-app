import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {AppState} from '../types/AppState';
import type {RootState} from 'src/config/configureStore';

const initialState: AppState = {
  session: null,
  loading: false,
  appRating: {
    hasRated: false,
    dateRated: null,
  },
  guestMode: false,
  snackbar: {
    isVisible: false,
    type: undefined,
    message: null,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleGuestMode: state => {
      state.guestMode = !state.guestMode;
    },
    setSession: (state, action: PayloadAction<AppState['session']>) => {
      const {payload} = action;
      state.session = payload;
    },
    setAppRating: (state, action: PayloadAction<AppState['appRating']>) => {
      const {payload} = action;
      state.appRating = payload;
    },
    openSnackBar: (
      state,
      action: PayloadAction<
        [AppState['snackbar']['type'], AppState['snackbar']['message']]
      >,
    ) => {
      const {payload} = action;
      state.snackbar = {
        isVisible: true,
        type: payload[0] || 'info',
        message: payload[1] || null,
      };
    },
    closeSnackBar: state => {
      state.snackbar = {
        isVisible: false,
        type: undefined,
        message: null,
      };
    },
  },
});

export const {
  setSession,
  closeSnackBar,
  openSnackBar,
  toggleGuestMode,
  setAppRating,
} = appSlice.actions;

export const appReducer = appSlice.reducer;

export const selectAppState = (state: RootState) => state.app;

import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {AppState} from '../types/AppState';
import type {RootState} from '@lib/redux';
import Container from 'typedi';
import {LoggerService} from '@services/logger';

const logger = Container.get(LoggerService);

const initialState: AppState = {
  offline: null,
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
  updateRequired: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
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
    setOfflineStatus: (state, action: PayloadAction<boolean>) => {
      state.offline = action.payload;
    },
    closeSnackBar: state => {
      state.snackbar = {
        isVisible: false,
        type: undefined,
        message: null,
      };
    },
    setUpdateRequired: (state, action: PayloadAction<boolean>) => {
      state.updateRequired = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(appActions.setSession, (state, action) => {
      if (!action.payload) return;
      const {
        payload: {user},
      } = action;
      logger.setUserDetails({
        uid: user.id,
        email: user.email,
      });
    });
  },
});

export const appActions = appSlice.actions;

export const appReducer = appSlice.reducer;

export const selectAppState = (state: RootState) => state.app;

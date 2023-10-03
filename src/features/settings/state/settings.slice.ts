import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'src/config/configureStore';
import type {SettingsState} from '../types/SettingsState';

const initialState: SettingsState = {
  darkMode: false,
  vibrate: true,
  sound: true,
  units: 'metric',
};

export const settingsSlice = createSlice({
  name: 'run',
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<any>) => {
      const {payload} = action;
      // state.status = payload;
    },
  },
});

export const {setSetting} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;

export const selectSettingsState = (state: RootState) => state.run;

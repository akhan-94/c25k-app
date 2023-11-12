import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'src/config/configureStore';
import type {SettingsState, ToggleSettings} from '../types/SettingsState';

const initialState: SettingsState = {
  darkMode: true,
  vibrate: true,
  sound: true,
  units: 'metric',
};

export const settingsSlice = createSlice({
  name: 'run',
  initialState,
  reducers: {
    setUnits: (state, action: PayloadAction<'metric' | 'imperial'>) => {
      state.units = action.payload;
    },
    toggleSetting: (state, action: PayloadAction<ToggleSettings>) => {
      const {payload} = action;
      state[payload] = !state[payload];
    },
  },
});

export const {toggleSetting, setUnits} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;

export const selectSettingsState = (state: RootState) => state.settings;

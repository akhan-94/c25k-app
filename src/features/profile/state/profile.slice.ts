import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'src/config/configureStore';
import type {ProfileState} from '../types/ProfileState';

const initialState: ProfileState = {
  birthdate: null,
  email: null,
  firstName: null,
  lastName: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<ProfileState>) => {
      state = {...state, ...action.payload};
    },
  },
});

export const {setState} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

export const selectProfileState = (state: RootState) => state.profile;

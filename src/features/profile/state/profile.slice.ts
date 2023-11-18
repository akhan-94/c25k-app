import type {RootState} from '@lib/redux';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
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
    setProfileState: (state, action: PayloadAction<Partial<ProfileState>>) => {
      const {payload} = action;
      state.birthdate = payload.birthdate ?? state.birthdate;
      state.email = payload.email ?? state.email;
      state.firstName = payload.firstName ?? state.firstName;
      state.lastName = payload.lastName ?? state.lastName;
    },
  },
});

export const {setProfileState} = profileSlice.actions;

export const profileReducer = profileSlice.reducer;

export const selectProfileState = (state: RootState) => state.profile;

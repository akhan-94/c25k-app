import {appReducer, loadingReducer} from '@app/state';
import {achievementsReducer} from '@features/achievements';
import {profileReducer} from '@features/profile';
import {runReducer} from '@features/run';
import {settingsReducer} from '@features/settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import type {PersistConfig} from 'redux-persist/es/types';
import type {RootState} from './store.types';

export const rootReducer = combineReducers({
  loading: loadingReducer,
  app: appReducer,
  profile: profileReducer,
  run: runReducer,
  achievements: achievementsReducer,
  settings: settingsReducer,
});

export const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['loading'],
};

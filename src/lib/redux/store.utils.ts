import type {TypedAddListener} from '@reduxjs/toolkit';
import {addListener, createListenerMiddleware} from '@reduxjs/toolkit';
import type {AppDispatch, AppStartListening, RootState} from './store.types';

export const listenerMiddleware = createListenerMiddleware<RootState>();

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

import type {TypedStartListening} from '@reduxjs/toolkit';
import type {rootReducer} from './store.constants';
import type {store} from './store';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

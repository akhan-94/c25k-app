import type {Middleware} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {persistConfig, rootReducer} from './store.constants';
import {listenerMiddleware} from './store.utils';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const extraMiddleware: Middleware[] = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  extraMiddleware.push(createDebugger());
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(listenerMiddleware.middleware)
      .concat(extraMiddleware),
});

export const persistor = persistStore(store);

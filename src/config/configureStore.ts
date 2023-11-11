import {runReducer} from '@features/run';
import {settingsReducer} from '@features/settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {
  Middleware,
  TypedAddListener,
  TypedStartListening,
} from '@reduxjs/toolkit';
import {
  addListener,
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
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
import {appReducer} from 'src/app';

const rootReducer = combineReducers({
  app: appReducer,
  settings: settingsReducer,
  run: runReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const listenerMiddleware = createListenerMiddleware<RootState>();

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

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

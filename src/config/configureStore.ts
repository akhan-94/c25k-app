import AsyncStorage from '@react-native-async-storage/async-storage';
import type {Middleware} from '@reduxjs/toolkit';
import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import {appReducer} from 'src/app';
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

const rootReducer = combineReducers({
  app: appReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
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

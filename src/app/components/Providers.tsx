import * as React from 'react';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {appTheme} from '@lib/theme';
import {persistor, store} from '@lib/redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Providers = ({children}: {children: JSX.Element}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider theme={appTheme}>{children}</PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

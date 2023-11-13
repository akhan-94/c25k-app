import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {createNavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {MainView} from './components/MainView';
import {NavigationContainer} from './components/NavigationContainer';
import {Providers} from './components/Providers';
import {GlobalListeners} from './components/GlobalListeners';

const navigationRef = createNavigationContainerRef();

export const App = (): JSX.Element => {
  /** Hooks */
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <Providers>
      <GlobalListeners>
        <MainView>
          <NavigationContainer navigationRef={navigationRef} />
        </MainView>
      </GlobalListeners>
    </Providers>
  );
};

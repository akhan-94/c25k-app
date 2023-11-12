import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {createNavigationContainerRef} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import {AppMainView} from './components/AppMainView';
import {AppNavigationContainer} from './components/AppNavigationContainer';
import {AppProviders} from './components/AppProviders';
import {SoundPlayer} from '@shared/utils';

enableFreeze();

SoundPlayer.loadSoundLibrary();

const navigationRef = createNavigationContainerRef();

export const App = (): JSX.Element => {
  /** Hooks */
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <AppProviders>
      <AppMainView>
        <AppNavigationContainer navigationRef={navigationRef} />
      </AppMainView>
    </AppProviders>
  );
};

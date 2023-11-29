import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Portal} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {selectLoading} from '@app/selectors';
import {selectSettingsState} from '@features/settings';
import {DarkTheme} from '@lib/theme';
import {AuthService} from '@services/auth';
import {LoadingSpinner} from '@shared/components/loading-spinner';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Container from 'typedi';

import {SnackBar} from './SnackBar';

const auth = Container.get(AuthService);

auth.getSession();
auth.watchSessionChange();

export const MainView = ({children}: {children: JSX.Element}) => {
  /** Global state */
  const {darkMode} = useSelector(selectSettingsState);
  const isGlobalLoading = useSelector(selectLoading);

  return (
    <GestureHandlerRootView style={containers.gestureHandler}>
      {isGlobalLoading && <OverlayLoading />}
      <BottomSheetModalProvider>
        <SnackBar />
        <StatusBar
          translucent
          backgroundColor="rgba(255, 255, 255, 0)"
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          animated
        />
        <Portal.Host>{children}</Portal.Host>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export const OverlayLoading = () => {
  return (
    <View style={containers.overlayLoading}>
      <LoadingSpinner />
    </View>
  );
};

export const containers = StyleSheet.create({
  gestureHandler: {
    flex: 1,
    position: 'relative',
    backgroundColor: DarkTheme.colors.background,
  },
  overlayLoading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.2)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

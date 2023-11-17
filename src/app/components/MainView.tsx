import {selectSettingsState} from '@features/settings';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {DarkTheme} from '@lib/theme';
import {AuthService} from '@services/auth';
import * as React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Portal} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Container from 'typedi';
import {SnackBar} from './SnackBar';

const auth = Container.get(AuthService);

auth.getSession();
auth.watchSessionChange();

export const MainView = ({children}: {children: JSX.Element}) => {
  /** Global state */
  const {darkMode} = useSelector(selectSettingsState);

  return (
    <GestureHandlerRootView style={containers.gestureHandler}>
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
export const containers = StyleSheet.create({
  gestureHandler: {
    flex: 1,
    position: 'relative',
    backgroundColor: DarkTheme.colors.background,
  },
});

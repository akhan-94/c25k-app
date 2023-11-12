import {selectSettingsState} from '@features/settings';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {DarkTheme} from '../utils/theme';
import {AppSnackBar} from './AppSnackBar';

export const AppMainView = ({children}: {children: JSX.Element}) => {
  /** Global state */
  const {darkMode} = useSelector(selectSettingsState);

  return (
    <GestureHandlerRootView style={containers.gestureHandler}>
      <View style={containers.main}>
        <AppSnackBar />
        <StatusBar
          translucent
          backgroundColor="rgba(255, 255, 255, 0)"
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          animated
        />
        {children}
      </View>
    </GestureHandlerRootView>
  );
};
export const containers = StyleSheet.create({
  gestureHandler: {
    flex: 1,
    position: 'relative',
  },
  main: {
    flex: 1,
    position: 'relative',
    backgroundColor: DarkTheme.colors.background,
  },
});

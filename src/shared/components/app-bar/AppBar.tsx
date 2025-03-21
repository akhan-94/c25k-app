import type {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import type {
  DrawerHeaderProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {getHeaderTitle} from '@react-navigation/elements';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {Appbar} from 'react-native-paper';
import type {AppBarProps} from './AppBar.types';
import {useSelector} from 'react-redux';
import {selectSettingsState} from '@features/settings';

export const AppBar = ({
  navigation,
  route,
  options,
  disableMenu = false,
  closeAction,
}: (NativeStackHeaderProps | BottomTabHeaderProps | DrawerHeaderProps) &
  AppBarProps) => {
  /** Hooks */
  const title = getHeaderTitle(options, route.name);

  /** Global state */
  const {darkMode} = useSelector(selectSettingsState);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        animated
      />
      <Appbar.Header mode={'center-aligned'} elevated>
        {closeAction && (
          <Appbar.Action icon="window-close" onPress={closeAction} />
        )}
        <Appbar.Content title={title} />
        {!disableMenu && (
          <Appbar.Action
            icon="menu"
            onPress={() =>
              (navigation as any as DrawerNavigationProp<any>).openDrawer()
            }
          />
        )}
      </Appbar.Header>
    </>
  );
};

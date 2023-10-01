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

export interface AppbarHeaderProps {
  noActions?: boolean;
}

export const AppBarHeader = ({
  navigation,
  route,
  options,
  noActions,
}: (NativeStackHeaderProps | BottomTabHeaderProps | DrawerHeaderProps) &
  AppbarHeaderProps) => {
  /** Hooks */
  const title = getHeaderTitle(options, route.name);
  const canGoBack = navigation.canGoBack();
  return (
    <Appbar.Header mode="medium">
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
        animated
      />
      {canGoBack ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {noActions ? null : (
        <>
          <Appbar.Action icon="bell-outline" onPress={() => {}} />
          <Appbar.Action
            icon="menu"
            onPress={() =>
              (navigation as any as DrawerNavigationProp<any>).openDrawer()
            }
          />
        </>
      )}
    </Appbar.Header>
  );
};

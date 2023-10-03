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
  return (
    <Appbar.Header mode="center-aligned" elevated>
      <StatusBar
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle="dark-content"
        animated
      />
      {!noActions && (
        <Appbar.Action
          icon="bell-outline"
          onPress={() => navigation.navigate('Notifications')}
        />
      )}
      <Appbar.Content title={title} />
      {!noActions && (
        <Appbar.Action
          icon="menu"
          onPress={() =>
            (navigation as any as DrawerNavigationProp<any>).openDrawer()
          }
        />
      )}
    </Appbar.Header>
  );
};

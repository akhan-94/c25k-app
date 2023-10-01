import {ShareAppScreen} from '@features/share-app';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import type {AboutNavigatorParamList} from './AboutNavigator';
import {AboutNavigator} from './AboutNavigator';
import {
  AccountNavigator,
  type AccountNavigatorParamList,
} from './AccountNavigator';
import {DrawerContent} from './DrawerContent';
import {
  GuidesNavigator,
  type GuidesNavigatorParamList,
} from './GuidesNavigator';
import type {HomeNavigatorParamList} from './HomeNavigator';
import {HomeNavigator} from './HomeNavigator';
import type {SettingsNavigatorParamList} from './SettingsNavigator';
import {SettingsNavigator} from './SettingsNavigator';
import {AppBarHeader} from './AppBarHeader';

export type MainStackParamList = {
  Guides: GuidesNavigatorParamList;
  Home: HomeNavigatorParamList;
  Settings: SettingsNavigatorParamList;
  About: AboutNavigatorParamList;
  Account: AccountNavigatorParamList;
  'Share App': undefined;
};

export type MainNavigatorParamList = {
  screen?: keyof MainStackParamList;
};

const Drawer = createDrawerNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeNavigator}
      />
      <Drawer.Screen
        name="Account"
        options={{
          headerShown: false,
        }}
        component={AccountNavigator}
      />
      <Drawer.Screen
        name="Guides"
        options={{
          headerShown: false,
        }}
        component={GuidesNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{headerShown: false}}
        component={SettingsNavigator}
      />
      <Drawer.Screen
        name="Share App"
        options={{
          headerShown: true,
          header: props => <AppBarHeader {...props} />,
        }}
        component={ShareAppScreen}
      />
      <Drawer.Screen
        name="About"
        options={{headerShown: false}}
        component={AboutNavigator}
      />
    </Drawer.Navigator>
  );
};

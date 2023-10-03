import {ShareAppScreen} from '@features/share-app';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import type {RunNavigatorParamList} from '@features/run';
import {RunNavigator} from '@features/run';
import type {SettingsNavigatorParamList} from '@features/settings';
import {SettingsNavigator} from '@features/settings';
import {AppBarHeader} from './AppBarHeader';
import {DrawerContent} from './DrawerContent';
import type {AchievementsNavigatorParamList} from '@features/achievements';
import {AchievementsNavigator} from '@features/achievements';

export type MainStackParamList = {
  Achievements: AchievementsNavigatorParamList;
  Run: RunNavigatorParamList;
  Settings: SettingsNavigatorParamList;
  'Share App': undefined;
};

export type MainNavigatorParamList = {
  screen?: keyof MainStackParamList;
};

const Drawer = createDrawerNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Run"
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Run"
        options={{
          headerShown: false,
        }}
        component={RunNavigator}
      />
      <Drawer.Screen
        name="Achievements"
        options={{
          headerShown: false,
          title: 'Achievements',
        }}
        component={AchievementsNavigator}
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
    </Drawer.Navigator>
  );
};

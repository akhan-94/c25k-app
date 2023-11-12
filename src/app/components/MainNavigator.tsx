import type {AchievementsNavigatorParamList} from '@features/achievements';
import {AchievementsNavigator} from '@features/achievements';
import {
  RemindersNavigator,
  type RemindersStackParamList,
} from '@features/reminders';
import type {RunNavigatorParamList} from '@features/run';
import {RunNavigator} from '@features/run';
import type {SettingsNavigatorParamList} from '@features/settings';
import {SettingsNavigator} from '@features/settings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {DrawerContent} from './DrawerContent';
import {ProfileNavigator, type ProfileStackParamList} from '@features/profile';
import {HistoryNavigator, type HistoryStackParamList} from '@features/history';

export type MainStackParamList = {
  Achievements: AchievementsNavigatorParamList;
  Run: RunNavigatorParamList;
  Settings: SettingsNavigatorParamList;
  Reminders: RemindersStackParamList;
  Profile: ProfileStackParamList;
  History: HistoryStackParamList;
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
        headerShown: false,
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="Run" component={RunNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
      <Drawer.Screen name="History" component={HistoryNavigator} />
      <Drawer.Screen
        name="Achievements"
        options={{
          title: 'Achievements',
        }}
        component={AchievementsNavigator}
      />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
      <Drawer.Screen name="Reminders" component={RemindersNavigator} />
    </Drawer.Navigator>
  );
};

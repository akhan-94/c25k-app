import {AchievementsNavigator} from '@features/achievements';
import {HistoryNavigator} from '@features/history';
import {ProfileNavigator} from '@features/profile';
import {RemindersNavigator} from '@features/reminders';
import {RunNavigator} from '@features/run';
import {SettingsNavigator} from '@features/settings';
import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {MainMenu} from './MainMenu/MainMenu';
import type {MainStackParamList} from '../types';

const Drawer = createDrawerNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Run"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={MainMenu}>
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

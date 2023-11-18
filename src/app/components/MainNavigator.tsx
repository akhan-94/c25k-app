import {Achievements} from '@features/achievements';
import {History} from '@features/history';
import {Profile} from '@features/profile';
import {Reminders} from '@features/reminders';
import {Run} from '@features/run';
import {Settings} from '@features/settings';
import {MainStack} from '@lib/navigation';
import * as React from 'react';
import {MainMenu} from './MainMenu/MainMenu';

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Run"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={MainMenu}>
      <MainStack.Screen name="Run" component={Run} />
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen name="History" component={History} />
      <MainStack.Screen
        name="Achievements"
        options={{
          title: 'Achievements',
        }}
        component={Achievements}
      />
      <MainStack.Screen name="Settings" component={Settings} />
      <MainStack.Screen name="Reminders" component={Reminders} />
    </MainStack.Navigator>
  );
};

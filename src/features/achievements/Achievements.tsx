import {AchievementsStack} from '@lib/navigation';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {MainAchievementsScreen} from './screens/MainAchievements.screen';

export const Achievements = () => {
  return (
    <AchievementsStack.Navigator
      initialRouteName="Main Achievements"
      screenOptions={{
        headerShown: true,
        title: 'Achievements',
        header: props => <AppBar {...props} />,
      }}>
      <AchievementsStack.Screen
        name="Main Achievements"
        component={MainAchievementsScreen}
      />
    </AchievementsStack.Navigator>
  );
};

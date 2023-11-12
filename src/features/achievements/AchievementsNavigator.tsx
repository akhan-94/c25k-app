import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBar} from '@shared/components/app-bar';
import {MainAchievementsScreen} from './screens/MainAchievements.screen';

export type AchievementsNavigatorStackParamList = {
  'Main Achievements': undefined;
};

export type AchievementsNavigatorParamList = {
  screen?: keyof AchievementsNavigatorStackParamList;
};

const Stack = createNativeStackNavigator<AchievementsNavigatorStackParamList>();

export const AchievementsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main Achievements"
      screenOptions={{
        headerShown: true,
        title: 'Achievements',
        header: props => <AppBar {...props} />,
      }}>
      <Stack.Screen
        name="Main Achievements"
        component={MainAchievementsScreen}
      />
    </Stack.Navigator>
  );
};

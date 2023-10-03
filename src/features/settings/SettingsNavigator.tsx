import {GeneralSettingsScreen} from '@features/settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from '../../app/components/AppBarHeader';
import type {AuthStackParamList} from '../auth/AuthNavigator';
import {NotificationsSettingsScreen} from './screens/NotificationsSettings.screen';

export type SettingsStackParamList = {
  'General Settings': undefined;
  'Notifications Settings': undefined;
};

export type SettingsNavigatorParamList = {
  screen?: keyof AuthStackParamList;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="General Settings"
      screenOptions={{
        headerShown: true,
        title: 'Settings',
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="General Settings" component={GeneralSettingsScreen} />
      <Stack.Screen
        name="Notifications Settings"
        component={NotificationsSettingsScreen}
      />
    </Stack.Navigator>
  );
};

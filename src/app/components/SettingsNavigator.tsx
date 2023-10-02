import {GeneralSettingsScreen} from '@features/settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from './AppBarHeader';
import type {AuthStackParamList} from './AuthNavigator';

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
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="General Settings" component={GeneralSettingsScreen} />
    </Stack.Navigator>
  );
};

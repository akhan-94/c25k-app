import {GeneralSettingsScreen} from '@features/settings';
import {SettingsStack} from '@lib/navigation/navigation';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {NotificationsSettingsScreen} from './screens/NotificationsSettings.screen';

export const Settings = (): React.JSX.Element => {
  return (
    <SettingsStack.Navigator
      initialRouteName="General Settings"
      screenOptions={{
        headerShown: true,
        title: 'Settings',
        header: props => <AppBar {...props} />,
      }}>
      <SettingsStack.Screen
        name="General Settings"
        component={GeneralSettingsScreen}
      />
      <SettingsStack.Screen
        name="Notifications Settings"
        component={NotificationsSettingsScreen}
      />
    </SettingsStack.Navigator>
  );
};

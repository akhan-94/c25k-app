import {RemindersStack} from '@lib/navigation/navigation';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {SetupReminderScreen} from './screens/SetupReminder.screen';

export const Reminders = () => {
  return (
    <RemindersStack.Navigator
      initialRouteName="Set up reminder"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <RemindersStack.Screen
        name="Set up reminder"
        component={SetupReminderScreen}
        options={{
          title: 'Set up reminder',
        }}
      />
    </RemindersStack.Navigator>
  );
};

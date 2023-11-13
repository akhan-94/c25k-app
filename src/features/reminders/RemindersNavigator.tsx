import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {SetupReminderScreen} from './screens/SetupReminder.screen';
import type {MainStackParamList} from '@app/types';

export type RemindersStackParamList = {
  'Set up reminder': undefined;
};

export type RemindersNavigatorParamList = {
  screen?: keyof RemindersStackParamList;
};

const Stack = createNativeStackNavigator<RemindersStackParamList>();

export const RemindersNavigator: React.FC<
  NativeStackScreenProps<MainStackParamList, 'Reminders'>
> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Set up reminder"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <Stack.Screen
        name="Set up reminder"
        component={SetupReminderScreen}
        options={{
          title: 'Set up reminder',
        }}
      />
    </Stack.Navigator>
  );
};

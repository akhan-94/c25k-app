import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {RunHistoryScreen} from './screens/RunHistory.screen';
import type {MainStackParamList} from '@app/types';

export type HistoryStackParamList = {
  'Run History': undefined;
};

export type HistoryNavigatorParamList = {
  screen?: keyof HistoryStackParamList;
};

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export const HistoryNavigator: React.FC<
  NativeStackScreenProps<MainStackParamList, 'History'>
> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Run History"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <Stack.Screen
        name="Run History"
        component={RunHistoryScreen}
        options={{
          title: 'Run History',
        }}
      />
    </Stack.Navigator>
  );
};

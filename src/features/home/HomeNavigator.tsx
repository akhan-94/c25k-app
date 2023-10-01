import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBarHeader} from '../../app/components/AppBarHeader';

import {StartScreen} from './screens/Start.screen';
import {RunScreen} from './screens/Run.screen';
import {SummaryScreen} from './screens/Summary.screen';

export type HomeStackParamList = {
  Start: undefined;
  Run: undefined;
  Summary: undefined;
};

export type HomeNavigatorParamList = {
  screen?: keyof HomeStackParamList;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Run" component={RunScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
};

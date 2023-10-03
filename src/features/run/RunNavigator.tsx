import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBarHeader} from '../../app/components/AppBarHeader';

import {MainRunScreen} from './screens/MainRun.screen';
import {SummaryScreen} from './screens/Summary.screen';
import {useSelector} from 'react-redux';
import {selectStatus} from './selectors/run.selectors';
import './listeners/run.listener';

export type RunStackParamList = {
  MainRun: undefined;
  Summary: undefined;
};

export type RunNavigatorParamList = {
  screen?: keyof RunStackParamList;
};

const Stack = createNativeStackNavigator<RunStackParamList>();

export const RunNavigator = () => {
  /** Global State */
  const status = useSelector(selectStatus);

  return (
    <Stack.Navigator
      initialRouteName="MainRun"
      screenOptions={{
        headerShown: true,
        title: 'Run',
        header: props => <AppBarHeader {...props} />,
      }}>
      {status === 'finished' ? (
        <Stack.Screen name="Summary" component={SummaryScreen} />
      ) : (
        <Stack.Screen name="MainRun" component={MainRunScreen} />
      )}
    </Stack.Navigator>
  );
};

import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {RunHistoryScreen} from './screens/RunHistory.screen';
import {HistoryStack} from '@lib/navigation';

export const History = () => {
  return (
    <HistoryStack.Navigator
      initialRouteName="Run History"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <HistoryStack.Screen
        name="Run History"
        component={RunHistoryScreen}
        options={{
          title: 'Run History',
        }}
      />
    </HistoryStack.Navigator>
  );
};

import {AuthNavigator} from '@features/auth';
import {LegalNavigator} from '@features/legal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {selectGuestMode, selectLoading, selectSession} from '../selectors';
import {LoadingScreen} from '../screens/Loading.screen';
import {MainNavigator} from './MainNavigator';
import type {RootStackParamList} from '../types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}

export const RootNavigator = () => {
  /** Global State */
  const session = useSelector(selectSession);
  const isLoading = useSelector(selectLoading);
  const isGuestMode = useSelector(selectGuestMode);

  return (
    <RootStack.Navigator
      initialRouteName={session ? 'Main' : 'Auth'}
      screenOptions={{
        headerShown: false,
      }}>
      {isLoading ? (
        <RootStack.Screen name="Loading" component={LoadingScreen} />
      ) : (
        <RootStack.Group>
          {isGuestMode || session ? (
            <RootStack.Screen name="Main" component={MainNavigator} />
          ) : (
            <RootStack.Screen name="Auth" component={AuthNavigator} />
          )}
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Legal"
            component={LegalNavigator}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

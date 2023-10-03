import type {RegistrationNavigatorParamList} from '@features/registration';
import {RegistrationNavigator} from '@features/registration';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import type {AuthNavigatorParamList} from '../../features/auth/AuthNavigator';
import {AuthNavigator} from '../../features/auth/AuthNavigator';
import {
  LegalNavigator,
  type LegalNavigatorParamList,
} from '../../features/legal/LegalNavigator';
import {supabase} from '../../lib/supabase';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {selectSession} from '../app.selectors';
import {setSession} from '../app.slice';
import type {MainNavigatorParamList} from './MainNavigator';
import {MainNavigator} from './MainNavigator';
import {NotificationsScreen} from '@features/notifications';

export type RootStackParamList = {
  Main: MainNavigatorParamList | undefined;
  Notifications: any;
  Auth: AuthNavigatorParamList | undefined;
  Registration: RegistrationNavigatorParamList | undefined;
  Legal: LegalNavigatorParamList;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}

export const RootNavigator = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global State */
  const session = useSelector(selectSession);

  /** Side Effects */
  React.useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      dispatch(setSession(session));
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });
  }, [dispatch]);

  return (
    <RootStack.Navigator
      initialRouteName={session ? 'Main' : 'Auth'}
      screenOptions={{
        headerShown: false,
      }}>
      {session ? (
        <RootStack.Group>
          <RootStack.Screen name="Main" component={MainNavigator} />
          <RootStack.Screen
            options={{
              headerShown: true,
            }}
            name="Notifications"
            component={NotificationsScreen}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name="Auth" component={AuthNavigator} />
          <RootStack.Screen
            name="Registration"
            options={{headerShown: false}}
            component={RegistrationNavigator}
          />
        </RootStack.Group>
      )}
      <RootStack.Screen
        options={{
          headerShown: true,
        }}
        name="Legal"
        component={LegalNavigator}
      />
    </RootStack.Navigator>
  );
};

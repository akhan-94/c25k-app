import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {supabase} from '../../lib/supabase';
import {useAppDispatch} from '../../shared/hooks/useAppDispatch';
import {selectSession} from '../app.selectors';
import {setSession} from '../app.slice';
import type {AuthNavigatorParamList} from './AuthNavigator';
import {AuthNavigator} from './AuthNavigator';
import {LegalNavigator, type LegalNavigatorParamList} from './LegalNavigator';
import type {MainNavigatorParamList} from './MainNavigator';
import {MainNavigator} from './MainNavigator';
import type {RegistrationNavigatorParamList} from './RegistrationNavigator';
import {RegistrationNavigator} from './RegistrationNavigator';

export type RootStackParamList = {
  Main: MainNavigatorParamList | undefined;
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
        <RootStack.Screen name="Main" component={MainNavigator} />
      ) : (
        <RootStack.Group>
          <RootStack.Screen name="Auth" component={AuthNavigator} />
          <RootStack.Screen
            name="Registration"
            options={{headerShown: false}}
            component={RegistrationNavigator}
          />
          <RootStack.Screen name="Legal" component={LegalNavigator} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

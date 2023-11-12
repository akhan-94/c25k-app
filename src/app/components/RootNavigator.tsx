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
import {
  selectGuestMode,
  selectLoading,
  selectSession,
} from '../selectors/app.selectors';
import {setSession} from '../state/app.slice';
import {LoadingScreen} from './LoadingScreen';
import type {MainNavigatorParamList} from './MainNavigator';
import {MainNavigator} from './MainNavigator';

export type RootStackParamList = {
  Main: MainNavigatorParamList;
  Loading: undefined;
  Auth: AuthNavigatorParamList;
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
  const isLoading = useSelector(selectLoading);
  const isGuestMode = useSelector(selectGuestMode);

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

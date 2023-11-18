import {Auth} from '@features/auth';
import {Legal} from '@features/legal';
import type {RootNavigatorProps} from '@lib/navigation';
import {RootStack} from '@lib/navigation';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {LoadingScreen} from '../screens/Loading.screen';
import {selectGuestMode, selectLoading, selectSession} from '../selectors';
import {MainNavigator} from './MainNavigator';
import {selectUpdateRequired} from '@app/selectors/app.selectors';
import {UpdateRequiredScreen} from '@app/screens/UpdateRequired.screen';

export const RootNavigator: React.FC<Partial<RootNavigatorProps>> = () => {
  /** Global State */
  const session = useSelector(selectSession);
  const isLoading = useSelector(selectLoading);
  const isUpdateRequired = useSelector(selectUpdateRequired);
  const isGuestMode = useSelector(selectGuestMode);

  return (
    <RootStack.Navigator
      initialRouteName={session ? 'Main' : 'Auth'}
      screenOptions={{
        headerShown: false,
      }}>
      {isUpdateRequired ? (
        <RootStack.Screen
          name="UpdateRequired"
          component={UpdateRequiredScreen}
        />
      ) : isLoading ? (
        <RootStack.Screen name="Loading" component={LoadingScreen} />
      ) : (
        <RootStack.Group>
          {isGuestMode || session ? (
            <RootStack.Screen name="Main" component={MainNavigator} />
          ) : (
            <RootStack.Screen name="Auth" component={Auth} />
          )}
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Legal"
            component={Legal}
          />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

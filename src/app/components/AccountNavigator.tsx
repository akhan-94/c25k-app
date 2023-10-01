import {AccountDetailsScreen} from '@features/account';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from './AppBarHeader';

export type AccountNavigatorStackParamList = {
  'My Account': undefined;
};

export type AccountNavigatorParamList = {
  screen?: keyof AccountNavigatorStackParamList;
};

const Stack = createNativeStackNavigator<AccountNavigatorStackParamList>();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="My Account" component={AccountDetailsScreen} />
    </Stack.Navigator>
  );
};

import {LoginScreen} from '@features/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

export type AuthStackParamList = {
  Login: undefined;
  'Forgot Password': undefined;
};

export type AuthNavigatorParamList = {
  screen?: keyof AuthStackParamList;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = (): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

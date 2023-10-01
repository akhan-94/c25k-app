import {SignUpScreen} from '@features/registration';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

export type RegistrationStackParamList = {
  'Sign Up': undefined;
};

export type RegistrationNavigatorParamList = {
  screen?: keyof RegistrationStackParamList;
};

const Stack = createNativeStackNavigator<RegistrationStackParamList>();

export const RegistrationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign Up"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

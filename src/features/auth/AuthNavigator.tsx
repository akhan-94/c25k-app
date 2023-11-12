import {LoginScreen} from '@features/auth';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import type {RootStackParamList} from 'src/app/components/RootNavigator';
import {SignUpScreen} from './screens/Signup.screen';

export type AuthStackParamList = {
  Login: undefined;
  'Sign Up': undefined;
  'Forgot Password': undefined;
};

export type AuthNavigatorParamList = {
  screen?: keyof AuthStackParamList;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Auth'>): React.JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
          headerShown: true,
          header: props => (
            <AppBar
              {...props}
              disableMenu
              closeAction={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

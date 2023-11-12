import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {SignUpScreen} from './screens/SignUp.screen';
import {AppBar} from '@shared/components/app-bar';
import type {RootStackParamList} from 'src/app/components/RootNavigator';

export type RegistrationStackParamList = {
  'Sign Up': undefined;
};

export type RegistrationNavigatorParamList = {
  screen?: keyof RegistrationStackParamList;
};

const Stack = createNativeStackNavigator<RegistrationStackParamList>();

export const RegistrationNavigator = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Registration'>) => {
  return (
    <Stack.Navigator
      initialRouteName="Sign Up"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} noActions={true} />,
      }}>
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
          header: props => (
            <AppBar
              {...props}
              noActions={true}
              closeAction={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

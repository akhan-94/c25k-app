import type {RootStackParamList} from '@app/types';
import {LoginScreen} from '@features/auth';
import {AuthStack} from '@lib/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {SignUpScreen} from './screens/Signup.screen';

export const Auth = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Auth'>): React.JSX.Element => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
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
    </AuthStack.Navigator>
  );
};

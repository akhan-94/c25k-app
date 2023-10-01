import {PrivacyPolicyScreen, TermsScreen} from '@features/legal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from './AppBarHeader';

export type LegalStackParamList = {
  'Privacy Policy': undefined;
  'Terms of Service': undefined;
};

export type LegalNavigatorParamList = {
  screen?: keyof LegalStackParamList;
};

const Stack = createNativeStackNavigator<LegalStackParamList>();

export const LegalNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} noActions />,
      }}>
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms of Service" component={TermsScreen} />
    </Stack.Navigator>
  );
};

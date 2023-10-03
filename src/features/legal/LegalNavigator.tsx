import {PrivacyPolicyScreen, TermsScreen} from '@features/legal';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from '../../app/components/AppBarHeader';

export type LegalStackParamList = {
  'Privacy policy': undefined;
  'Terms of service': undefined;
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
      <Stack.Screen name="Privacy policy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms of service" component={TermsScreen} />
    </Stack.Navigator>
  );
};

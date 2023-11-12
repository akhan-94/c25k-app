import {PrivacyPolicyScreen, TermsScreen} from '@features/legal';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBar} from '@shared/components/app-bar';
import type {RootStackParamList} from 'src/app/components/RootNavigator';

export type LegalStackParamList = {
  'Privacy policy': undefined;
  'Terms of service': undefined;
};

export type LegalNavigatorParamList = {
  screen?: keyof LegalStackParamList;
};

const Stack = createNativeStackNavigator<LegalStackParamList>();

export const LegalNavigator = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Legal'>) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => (
          <AppBar
            {...props}
            noActions
            closeAction={() => navigation.goBack()}
          />
        ),
      }}>
      <Stack.Screen name="Privacy policy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Terms of service" component={TermsScreen} />
    </Stack.Navigator>
  );
};

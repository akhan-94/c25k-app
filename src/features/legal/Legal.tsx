import type {RootStackParamList} from '@app/types';
import {PrivacyPolicyScreen, TermsScreen} from '@features/legal';
import {LegalStack} from '@lib/navigation';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';

export const Legal = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Legal'>) => {
  return (
    <LegalStack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => (
          <AppBar
            {...props}
            disableMenu
            closeAction={() => navigation.goBack()}
          />
        ),
      }}>
      <LegalStack.Screen
        name="Privacy policy"
        component={PrivacyPolicyScreen}
      />
      <LegalStack.Screen name="Terms of service" component={TermsScreen} />
    </LegalStack.Navigator>
  );
};

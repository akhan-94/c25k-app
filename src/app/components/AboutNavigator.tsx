import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '@features/profile';
import {AppBarHeader} from './AppBarHeader';

export type AboutStackParamList = {
  'About Us': undefined;
};

export type AboutNavigatorParamList = {
  screen?: keyof AboutStackParamList;
};

const Stack = createNativeStackNavigator<AboutStackParamList>();

export const AboutNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="About Us" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

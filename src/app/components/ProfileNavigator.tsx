import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '@features/profile';
import {AppBarHeader} from './AppBarHeader';

export type ProfileStackParamList = {
  Profile: undefined;
  'My Profile': undefined;
};

export type ProfileNavigatorParamList = {
  screen?: keyof ProfileStackParamList;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="My Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

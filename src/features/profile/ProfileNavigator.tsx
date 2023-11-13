import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {MyProfileScreen} from './screens/MyProfile.screen';
import type {MainStackParamList} from '@app/types';

export type ProfileStackParamList = {
  'My Profile': undefined;
};

export type ProfileNavigatorParamList = {
  screen?: keyof ProfileStackParamList;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator: React.FC<
  NativeStackScreenProps<MainStackParamList, 'Profile'>
> = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <Stack.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          title: 'My Profile',
        }}
      />
    </Stack.Navigator>
  );
};

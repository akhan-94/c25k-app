import {ProfileStack} from '@lib/navigation/navigation';
import {AppBar} from '@shared/components/app-bar';
import * as React from 'react';
import {MyProfileScreen} from './screens/MyProfile.screen';

export const Profile = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="My Profile"
      screenOptions={{
        headerShown: true,
        header: props => <AppBar {...props} />,
      }}>
      <ProfileStack.Screen
        name="My Profile"
        component={MyProfileScreen}
        options={{
          title: 'My Profile',
        }}
      />
    </ProfileStack.Navigator>
  );
};

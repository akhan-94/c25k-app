import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {AppBarHeader} from './AppBarHeader';
import {GuidesDirectoryScreen} from '@features/guides';

export type GuidesNavigatorStackParamList = {
  'Guides Directory': undefined;
};

export type GuidesNavigatorParamList = {
  screen?: keyof GuidesNavigatorStackParamList;
};

const Stack = createNativeStackNavigator<GuidesNavigatorStackParamList>();

export const GuidesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Guides Directory"
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}>
      <Stack.Screen name="Guides Directory" component={GuidesDirectoryScreen} />
    </Stack.Navigator>
  );
};

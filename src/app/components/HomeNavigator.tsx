import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';
import * as React from 'react';

import {FinderScreen} from '@features/finder';
import {HomeScreen} from '@features/home';
import {ToolsScreen} from '@features/tools';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppBarHeader} from './AppBarHeader';

export type HomeStackParamList = {
  Welcome: undefined;
  Finder: undefined;
  Tools: undefined;
};

export type HomeNavigatorParamList = {
  tab?: keyof HomeStackParamList;
};

const Tab = createBottomTabNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <AppBarHeader {...props} />,
      }}
      initialRouteName="Welcome"
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              // navigation.navigate(RootNavigationScreen.MAIN, {
              //   screen: route.name,
              //   params: route.params,
              // });
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route?.title;

            return label;
          }}
        />
      )}>
      <Tab.Screen
        name="Welcome"
        component={FinderScreen}
        options={{
          tabBarLabel: 'My Garden',
          tabBarIcon: ({color, size}) => {
            return <Icon name="flower" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Finder"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Finder',
          tabBarIcon: ({color, size}) => {
            return <Icon name="magnify" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          tabBarLabel: 'Tools',
          tabBarIcon: ({color, size}) => {
            return <Icon name="tools" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

import analytics from '@react-native-firebase/analytics';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {DarkTheme} from '@lib/theme';
import {RootNavigator} from './RootNavigator';

export const NavigationContainer = ({navigationRef}: {navigationRef: any}) => {
  /** Refs */
  const routeNameRef = React.useRef<string | undefined>();

  return (
    <RNNavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
      }}
      theme={DarkTheme}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </RNNavigationContainer>
  );
};

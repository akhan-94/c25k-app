import analytics from '@react-native-firebase/analytics';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {DarkTheme} from '../utils/theme';
import {RootNavigator} from './RootNavigator';

export const AppNavigationContainer = ({
  navigationRef,
}: {
  navigationRef: any;
}) => {
  /** Refs */
  const routeNameRef = React.useRef<string | undefined>();

  return (
    <NavigationContainer
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
    </NavigationContainer>
  );
};

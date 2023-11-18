import type {NavigationContainerRefWithCurrent} from '@react-navigation/native';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {DarkTheme} from '@lib/theme';
import {RootNavigator} from './RootNavigator';
import type {RootStackParamList} from '@lib/navigation';
import {AnalyticsService} from '@services/analytics';
import Container from 'typedi';

const analytics = Container.get(AnalyticsService);

export const NavigationContainer = ({
  navigationRef,
}: {
  navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>;
}) => {
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
          await analytics.logScreenView(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </RNNavigationContainer>
  );
};

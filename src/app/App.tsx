import analytics from '@react-native-firebase/analytics';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import * as React from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';
import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../config/configureStore';
import {RootNavigator} from './components/RootNavigator';
import {appTheme} from 'src/lib/theme';

enableFreeze();

const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme});

const navigationRef = createNavigationContainerRef();

export const App = (): JSX.Element => {
  /** Refs */
  const routeNameRef = React.useRef<string | undefined>();

  /** Hooks */
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={appTheme}>
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer
              ref={navigationRef}
              onReady={() => {
                routeNameRef.current =
                  navigationRef?.current?.getCurrentRoute()?.name;
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
          </GestureHandlerRootView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

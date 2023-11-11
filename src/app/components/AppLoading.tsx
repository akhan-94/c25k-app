import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectLoading} from '../selectors/app.selectors';

export const AppGate = ({children}: {children: React.ReactNode}) => {
  /** Global state */
  const isLoading = useSelector(selectLoading);

  if (isLoading) return <LoadingScreen />;
  return children as JSX.Element;
};

export const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

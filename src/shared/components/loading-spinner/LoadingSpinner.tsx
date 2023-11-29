import * as React from 'react';
import {ActivityIndicator} from 'react-native-paper';

export const LoadingSpinner = () => {
  return <ActivityIndicator animating={true} size="large" />;
};

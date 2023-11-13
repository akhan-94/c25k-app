import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
});

import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';

export const MotivationImage = () => {
  return (
    <View>
      <Surface style={styles.surface} elevation={4}>
        <Text>Motivation Shit</Text>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const DayInstructions = () => {
  return (
    <View style={styles.container}>
      <Text>Day Instructions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7f1e5',
    padding: 16,
    borderRadius: 10,
  },
});

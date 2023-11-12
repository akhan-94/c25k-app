import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectProgramActiveDay} from '../selectors/run.selectors';

export const DayInstructions = () => {
  /** Global state */
  const {instructions} = useSelector(selectProgramActiveDay);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>Day Instructions</Text>
      <Text style={[styles.text, styles.instructionText]}>{instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  text: {
    textAlign: 'right',
  },
  instructionText: {
    fontSize: 24,
    fontWeight: '100',
    paddingLeft: 100,
  },
});

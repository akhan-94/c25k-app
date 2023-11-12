import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectProgramActiveDay} from '../selectors/run.selectors';
import {appTheme} from '@lib/theme';

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
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    marginRight: appTheme.spacing.medium,
    marginLeft: appTheme.spacing.medium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.075)',
    borderRadius: appTheme.roundness,
  },
  header: {
    fontSize: 18,
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 24,
    fontWeight: '100',
    paddingRight: '10%',
    paddingLeft: '10%',
  },
});

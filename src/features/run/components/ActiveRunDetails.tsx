import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectActiveStep, selectStatus} from '../run.selectors';

const StatCell = ({label, value}: {label: string; value: number | string}) => {
  return (
    <View style={styles.statCell}>
      <Text variant="labelSmall">{label}</Text>
      <Text variant="titleMedium">{value}</Text>
    </View>
  );
};

export const ActiveRunDetails = () => {
  /** Global State */
  const status = useSelector(selectStatus);
  const activeStep = useSelector(selectActiveStep);
  return (
    <View>
      {/* <Text>{status}</Text>
      <Text>{activeStep}</Text> */}
      <View style={styles.heading}>
        <Text variant="headlineMedium">Warm up</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text variant="displayLarge">5:00</Text>
      </View>
      <Surface style={styles.surface} elevation={1} mode="elevated">
        <View style={styles.statRow}>
          <StatCell label="Calories" value={50} />
          <StatCell label="Distance" value={50} />
          <StatCell label="Steps" value={50} />
        </View>
        <View style={[styles.statRow, {marginTop: 10}]}>
          <StatCell label="Avg. Speed" value={50} />
          <StatCell label="Remaining Time" value={'30:00'} />
        </View>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  statRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  statCell: {
    alignItems: 'center',
    flex: 1,
  },
  surface: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

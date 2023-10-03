import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  selectProgramActiveStep,
  selectTimerAsFriendlyFormat,
} from '../selectors/run.selectors';

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
  const timer = useSelector(selectTimerAsFriendlyFormat);
  const currentStep = useSelector(selectProgramActiveStep);

  /** Derived State */
  const stage = React.useMemo(() => {
    const {type} = currentStep;
    return type;
  }, [currentStep]);

  return (
    <View>
      <View style={styles.heading}>
        <Text variant="headlineMedium">{stage}</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text variant="displayLarge">{timer}</Text>
      </View>
      <View style={styles.statRow}>
        <StatCell label="Calories" value={50} />
        <StatCell label="Distance" value={50} />
      </View>
      <View style={[styles.statRow, {marginTop: 10}]}>
        <StatCell label="Avg. Speed" value={50} />
        <StatCell label="Remaining Time" value={'30:00'} />
      </View>
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
});

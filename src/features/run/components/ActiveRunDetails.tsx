import {appTheme} from '@lib/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  selectProgram,
  selectProgramActiveStep,
  selectRemainingTimer,
  selectRunMetrics,
  selectTimerAsFriendlyFormat,
} from '../selectors/run.selectors';
import type {PreviewDay} from '../types/run.types';
import {PROGRAM_MAP} from '@shared/constants';

const StatCell = ({label, value}: {label: string; value: number | string}) => {
  return (
    <View style={styles.statCell}>
      <Text variant="labelSmall">{label}</Text>
      <Text variant="titleMedium">{value}</Text>
    </View>
  );
};

export const ActiveRunDetails = ({previewDay}: {previewDay: PreviewDay}) => {
  /** Global State */
  const program = useSelector(selectProgram);
  const timer = useSelector(selectTimerAsFriendlyFormat);
  const currentStep = useSelector(selectProgramActiveStep);
  const remainingTimer = useSelector(selectRemainingTimer);
  const metrics = useSelector(selectRunMetrics);

  /** Derived State */
  const stage = React.useMemo(() => {
    const {type} = currentStep;
    return type;
  }, [currentStep]);

  const remainingTimerOrPreviewTimer = React.useMemo(() => {
    if (previewDay) {
      return PROGRAM_MAP[program][previewDay.week - 1][
        previewDay.day - 1
      ].pattern.reduce((acc, step) => {
        return acc + step.time;
      }, 0);
    } else return remainingTimer;
  }, [program, previewDay, remainingTimer]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text variant="headlineMedium">{stage}</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text variant="displayLarge">{timer}</Text>
      </View>
      <View style={styles.statRow}>
        <StatCell label="Calories" value={metrics.calories || 0} />
        <StatCell label="Distance" value={metrics.distance || 0} />
      </View>
      <View style={[styles.statRow, {marginTop: 10}]}>
        <StatCell label="Avg. Speed" value={metrics.speed || 0} />
        <StatCell label="Remaining Time" value={remainingTimerOrPreviewTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: appTheme.spacing.medium,
    paddingBottom: appTheme.spacing.medium,
  },
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

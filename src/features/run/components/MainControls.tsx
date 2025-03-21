import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectStatus} from '../selectors/run.selectors';
import {goBackToLastStep, setStatus, skipToNextStep} from '../state/run.slice';
import type {RunState} from '../types/RunState';
import {appTheme} from '@lib/theme';

export const MainControls = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global State */
  const status = useSelector(selectStatus);

  /** Derived State */
  const mainButtonText = React.useMemo(() => {
    if (status === 'waiting') return 'Start';
    if (status === 'in-progress') return 'Pause';
    if (status === 'paused') return 'Resume';
  }, [status]);

  const showInProgressButtons = React.useMemo(() => {
    return status === 'in-progress' || status === 'paused';
  }, [status]);

  /** Callbacks */
  const start = React.useCallback(() => {
    let action: RunState['status'] = 'waiting';
    if (status === 'waiting') action = 'in-progress';
    if (status === 'in-progress') action = 'paused';
    if (status === 'paused') action = 'in-progress';
    dispatch(setStatus(action));
  }, [dispatch, status]);

  const finish = React.useCallback(() => {
    dispatch(setStatus('finished'));
  }, [dispatch]);

  const setStep = React.useCallback(
    (action: 'next' | 'prev') => {
      if (action === 'next') dispatch(skipToNextStep());
      else dispatch(goBackToLastStep());
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      {showInProgressButtons && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="lock"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </View>
      )}
      {status !== 'waiting' && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="chevron-double-left"
            size={30}
            onPress={() => setStep('prev')}
          />
        </View>
      )}
      <View style={styles.middle}>
        <Pressable style={styles.mainButton} onPress={start}>
          <Text style={{color: '#fff'}}>{mainButtonText}</Text>
        </Pressable>
      </View>
      {status !== 'waiting' && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="chevron-double-right"
            size={30}
            onPress={() => setStep('next')}
          />
        </View>
      )}
      {showInProgressButtons && (
        <View style={styles.buttonContainer}>
          <IconButton icon="close-octagon-outline" size={30} onPress={finish} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: appTheme.roundness,
    borderTopRightRadius: appTheme.roundness,
    flexShrink: 1,
    paddingBottom: 17,
    paddingTop: 17,
    backgroundColor: appTheme.colors.surfaceVariant,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    marginRight: 8,
    marginLeft: 8,
  },
  buttonContainer: {
    flexShrink: 1,
  },
  mainButton: {
    backgroundColor: appTheme.colors.primary,
    borderRadius: 200,
    width: 75,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

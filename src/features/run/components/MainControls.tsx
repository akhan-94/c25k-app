import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectStatus} from '../run.selectors';
import {setStatus} from '../run.slice';
import type {RunState} from '../types/RunState';

export const MainControls = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global State */
  const status = useSelector(selectStatus);

  /** Derived State */
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

  return (
    <View style={styles.container}>
      {showInProgressButtons && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="lock"
            mode="contained"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <IconButton
          icon={status === 'waiting' ? 'run-fast' : 'chevron-double-left'}
          mode="contained"
          size={30}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={styles.middle}>
        <Pressable style={styles.mainButton} onPress={start}>
          <Text>{status === 'waiting' ? 'Start' : 'Pause'}</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          icon={status === 'waiting' ? 'run-fast' : 'chevron-double-right'}
          size={30}
          mode="contained"
          onPress={() => console.log('Pressed')}
        />
      </View>
      {showInProgressButtons && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="close-octagon-outline"
            mode="contained"
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#e7f1e5',
    color: 'white',
    borderRadius: 200,
    width: 75,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

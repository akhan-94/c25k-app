import {ScreenWrapper} from '@shared/components';
import {useAppDispatch} from '@shared/hooks/useAppDispatch';
import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {setStatus} from '../state/run.slice';

export const SummaryScreen = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Callbacks */
  const reset = React.useCallback(
    () => dispatch(setStatus('waiting')),
    [dispatch],
  );

  return (
    <ScreenWrapper withScrollView={false}>
      <View style={{flex: 1}}>
        <Text>Summary Screen</Text>
      </View>
      <View style={{flexShrink: 1}}>
        <Button mode="contained" onPress={reset}>
          Finish
        </Button>
      </View>
    </ScreenWrapper>
  );
};

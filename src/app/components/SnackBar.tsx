import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {Snackbar as RNPSnackBar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectSnackBar} from '../selectors/app.selectors';
import {appActions} from '../state';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SnackBar = () => {
  /** Hooks */
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  /** Global state */
  const snackbar = useSelector(selectSnackBar);

  /** Functions */
  const onDismissSnackBar = React.useCallback(() => {
    dispatch(appActions.closeSnackBar());
  }, [dispatch]);

  return (
    <View
      style={{
        zIndex: 999,
      }}>
      <RNPSnackBar
        visible={snackbar?.isVisible}
        wrapperStyle={{top: insets.top}}
        duration={3000}
        onDismiss={() => onDismissSnackBar()}>
        {snackbar?.message}
      </RNPSnackBar>
    </View>
  );
};

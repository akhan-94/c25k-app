import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {Snackbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectSnackBar} from '../selectors/app.selectors';
import {closeSnackBar} from '../state/app.slice';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const AppSnackBar = () => {
  /** Hooks */
  const dispatch = useAppDispatch();
  const insets = useSafeAreaInsets();
  /** Global state */
  const snackbar = useSelector(selectSnackBar);

  /** Functions */
  const onDismissSnackBar = React.useCallback(() => {
    dispatch(closeSnackBar());
  }, [dispatch]);

  return (
    <View
      style={{
        zIndex: 999,
      }}>
      <Snackbar
        visible={snackbar?.isVisible}
        wrapperStyle={{top: insets.top}}
        duration={3000}
        onDismiss={() => onDismissSnackBar()}>
        {snackbar?.message}
      </Snackbar>
    </View>
  );
};

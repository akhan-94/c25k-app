import * as React from 'react';
import {useAppDispatch} from './useAppDispatch';
import {appActions} from '@app/state';
import crashlytics from '@react-native-firebase/crashlytics';

export const useErrorHandler = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  return React.useCallback(
    (message: string, error?: any) => {
      dispatch(appActions.openSnackBar(['error', message]));
      if (!error) return;
      if (__DEV__) console.error(error);
      else crashlytics().recordError(error);
    },
    [dispatch],
  );
};

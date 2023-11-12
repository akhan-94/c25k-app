import * as React from 'react';
import {useAppDispatch} from './useAppDispatch';
import {openSnackBar} from 'src/app/state/app.slice';
import crashlytics from '@react-native-firebase/crashlytics';

export const useErrorHandler = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  return React.useCallback(
    (message: string, error: any) => {
      dispatch(openSnackBar(['error', message]));
      if (__DEV__) console.error(error);
      else crashlytics().recordError(error);
    },
    [dispatch],
  );
};

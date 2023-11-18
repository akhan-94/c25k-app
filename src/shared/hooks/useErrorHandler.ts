import {appActions} from '@app/state';
import {LoggerService} from '@services/logger';
import * as React from 'react';
import Container from 'typedi';
import {useAppDispatch} from './useAppDispatch';

const logger = Container.get(LoggerService);

export const useErrorHandler = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  return React.useCallback(
    (message: string, error?: any) => {
      dispatch(appActions.openSnackBar(['error', message]));
      if (!error) return;
      logger.recordError(error);
    },
    [dispatch],
  );
};

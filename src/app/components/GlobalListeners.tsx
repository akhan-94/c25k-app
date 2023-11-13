import * as React from 'react';
import {addEventListener} from '@react-native-community/netinfo';
import {useAppDispatch} from '@shared/hooks';
import {appActions} from '@app/state';

export interface GlobalListenersProps {
  children: React.ReactNode;
}

export const GlobalListeners = ({children}: GlobalListenersProps) => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Internet connection listener */
  React.useEffect(() => {
    const unsubscribe = addEventListener(state => {
      dispatch(appActions.setOfflineStatus(!state.isConnected));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return <>{children}</>;
};

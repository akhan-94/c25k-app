import * as React from 'react';

import {AppBar} from '@shared/components/app-bar';

import {RunStack} from '@lib/navigation/navigation';
import {useAppDispatch} from '@shared/hooks';
import {useSelector} from 'react-redux';
import './listeners/run.listener';
import {MainRunScreen} from './screens/MainRun.screen';
import {SummaryScreen} from './screens/Summary.screen';
import {selectStatus} from './selectors/run.selectors';
import {setTimerFromActiveStep} from './state/run.slice';

export const Run = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Global State */
  const status = useSelector(selectStatus);

  /** Side effects */
  React.useEffect(() => {
    dispatch(setTimerFromActiveStep());
  }, [dispatch]);

  return (
    <RunStack.Navigator
      initialRouteName="MainRun"
      screenOptions={{
        headerShown: true,
        title: 'Run',
        header: props => <AppBar {...props} />,
      }}>
      {status === 'finished' ? (
        <RunStack.Screen name="Summary" component={SummaryScreen} />
      ) : (
        <RunStack.Screen name="MainRun" component={MainRunScreen} />
      )}
    </RunStack.Navigator>
  );
};

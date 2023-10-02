import {startAppListening} from 'src/config/configureStore';
import {setStatus} from '../state/run.slice';

startAppListening({
  predicate: (action, currentState, previousState) => {
    // return true when the listener should run
    return (
      previousState.run.status === 'waiting' &&
      previousState.run.status !== currentState.run.status
    );
  },
  effect: (dispatch, getState) => {
    console.log('something happened');
  },
});

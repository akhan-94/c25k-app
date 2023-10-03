import {startAppListening} from 'src/config/configureStore';

startAppListening({
  predicate: (action, currentState, previousState) => {
    return (
      previousState.run.status === 'waiting' &&
      previousState.run.status !== currentState.run.status
    );
  },
  effect: (dispatch, getState) => {
    console.log('something happened');
  },
});

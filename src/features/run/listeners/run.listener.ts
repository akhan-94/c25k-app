import {PROGRAM_MAP} from '@shared/constants';
import type {ProgramDay} from '@shared/types';
import {startAppListening} from 'src/config/configureStore';
import {decrementTimer, setStatus, setStep, setTimer} from '../state/run.slice';

let localInterval: NodeJS.Timeout;
let details: ProgramDay;

startAppListening({
  predicate: (action, currentState, previousState) => {
    return (
      // previousState.run.status === 'waiting' &&
      previousState.run.status !== currentState.run.status
    );
  },
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    const program = state.run.program;
    const [week, day] = state.run.progress;
    details = PROGRAM_MAP[program][week][day];
    if (state.run.status === 'in-progress') {
      localInterval = setInterval(() => {
        listenerApi.dispatch(decrementTimer());
      }, 1000);
    } else {
      if (localInterval) clearInterval(localInterval);
    }
  },
});

startAppListening({
  predicate: (action, currentState, previousState) => {
    return previousState.run.timer !== currentState.run.timer;
  },
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    if (state.run.timer <= 0) {
      const step = state.run.progress[2];
      if (details.pattern[step + 1]) {
        const {time} = details.pattern[step + 1];
        listenerApi.dispatch(setStep(step + 1));
        listenerApi.dispatch(setTimer(time));
      } else {
        listenerApi.dispatch(setStep(0));
        listenerApi.dispatch(setStatus('finished'));
      }
    }
  },
});

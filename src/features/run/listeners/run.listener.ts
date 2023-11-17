import {startAppListening} from '@lib/redux';
import {SoundService} from '@services/sound';
import {VibrationService} from '@services/vibration';
import {PROGRAM_MAP} from '@shared/constants';
import type {ProgramDay} from '@shared/types';
import {
  decrementTimer,
  incrementDay,
  setStatus,
  setStep,
  setTimer,
} from '../state/run.slice';
import Container from 'typedi';

const vibrations = Container.get(VibrationService);
const sound = Container.get(SoundService);

let localInterval: NodeJS.Timeout;
let details: ProgramDay;

startAppListening({
  predicate: (action, currentState, previousState) => {
    return previousState.run.status !== currentState.run.status;
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
    if (state.run.timer < 1) {
      const step = state.run.progress[2];
      if (details.pattern[step + 1]) {
        const {time, type} = details.pattern[step + 1];
        listenerApi.dispatch(setStep(step + 1));
        if (state.settings.sound) playStepSound(type);
        if (state.settings.vibrate) vibrations.vibrate();
        listenerApi.dispatch(setTimer(time));
      } else {
        if (state.settings.sound) sound.play('bell');
        if (state.settings.vibrate) vibrations.vibrate();
        listenerApi.dispatch(setStep(0));
        listenerApi.dispatch(incrementDay());
        listenerApi.dispatch(setStatus('finished'));
      }
    }
  },
});

const playStepSound = (type: ProgramDay['pattern'][0]['type']) => {
  sound.play('bell');
  switch (type) {
    case 'walk': {
      sound.play('male-start-walking');
      break;
    }
    case 'jog': {
      sound.play('male-start-runnng');
      break;
    }
    case 'cooldown': {
      sound.play('male-start-cooldown');
      break;
    }
  }
};

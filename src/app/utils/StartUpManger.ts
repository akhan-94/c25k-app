import {SoundPlayer} from '@shared/utils';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';
import {store} from '../../config/configureStore';
import {setGlobalLoading} from '../state/app.slice';

export class StartUpManager {
  constructor() {}

  public initialize() {
    this._beforeInitialize();
    enableFreeze();
    registerTranslation('en', en);
    SoundPlayer.loadSoundLibrary();
    this._afterInitialize();
  }

  private _beforeInitialize() {
    store.dispatch(setGlobalLoading(true));
  }

  private _afterInitialize() {
    setTimeout(() => {
      store.dispatch(setGlobalLoading(false));
    }, 1000);
  }
}

const startUpManager = new StartUpManager();

export default startUpManager;

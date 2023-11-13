import SoundPlayer from '@lib/sound';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';

export class StartUpManager {
  constructor() {}

  public initialize() {
    enableFreeze();
    registerTranslation('en', en);
    SoundPlayer.initialize();
  }
}

const startUpManager = new StartUpManager();

export default startUpManager;

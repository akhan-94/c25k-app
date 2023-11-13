import SoundManager from '@lib/sound';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';

class StartUpManager {
  constructor() {}

  public initialize() {
    enableFreeze();
    registerTranslation('en', en);
    SoundManager.initialize();
    this._configGoogleSignIn();
  }

  private _configGoogleSignIn() {
    if (!Config.OAUTH_ANDROID_CLIENT_ID) return;
    GoogleSignin.configure({
      webClientId: Config.OAUTH_ANDROID_CLIENT_ID,
      offlineAccess: true,
    });
  }
}

const startUpManager = new StartUpManager();

export default startUpManager;

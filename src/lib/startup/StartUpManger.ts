import FeatureFlagManager from '@lib/feature-flag';
import {FeatureFlag} from '@lib/feature-flag/feature-flag.constants';
import SoundManager from '@lib/sound';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';

class StartUpManager {
  public static readonly prodFeatureFlags: FeatureFlag[] = [
    FeatureFlag.RUN,
    FeatureFlag.PROFILE,
    FeatureFlag.SETTINGS,
    FeatureFlag.GUEST_MODE,
    FeatureFlag.SIGN_UP,
  ];
  public static readonly devFeatureFlags: FeatureFlag[] = [
    FeatureFlag.GOOGLE_SIGNON,
  ];

  constructor() {}

  public initialize() {
    enableFreeze();
    registerTranslation('en', en);
    SoundManager.initialize();
    this._setFeatureFlags();
    this._configGoogleSignIn();
  }

  private _setFeatureFlags() {
    FeatureFlagManager.addFlags(StartUpManager.prodFeatureFlags);
    if (__DEV__) FeatureFlagManager.addFlags(StartUpManager.devFeatureFlags);
  }

  private _configGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        '640031171222-0jed0gbhght3lqpfga1d9kr4hia2vl02.apps.googleusercontent.com',
    });
  }
}

const startUpManager = new StartUpManager();

export default startUpManager;

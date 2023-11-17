import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {FeatureFlag, FeatureFlagService} from '@services/feature-flag';
import {SoundService} from '@services/sound';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';
import Container, {Service} from 'typedi';

@Service()
export class StartUpService {
  public readonly soundService = Container.get(SoundService);
  public readonly featureFlag = Container.get(FeatureFlagService);

  public readonly prodFeatureFlags: FeatureFlag[] = [
    FeatureFlag.RUN,
    FeatureFlag.PROFILE,
    FeatureFlag.SETTINGS,
    FeatureFlag.GUEST_MODE,
    FeatureFlag.SIGN_UP,
  ];
  public readonly devFeatureFlags: FeatureFlag[] = [FeatureFlag.GOOGLE_SIGNON];

  constructor() {}

  public initialize() {
    enableFreeze();
    registerTranslation('en', en);
    this.soundService.initialize();
    this._setFeatureFlags();
    this._configGoogleSignIn();
  }

  private _setFeatureFlags() {
    this.featureFlag.addFlags(this.prodFeatureFlags);
    if (__DEV__) this.featureFlag.addFlags(this.devFeatureFlags);
  }

  private _configGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        '640031171222-0jed0gbhght3lqpfga1d9kr4hia2vl02.apps.googleusercontent.com',
    });
  }
}

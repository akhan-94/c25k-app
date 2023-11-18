import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {FeatureFlag, FeatureFlagService} from '@services/feature-flag';
import {SoundService} from '@services/sound';
import {en, registerTranslation} from 'react-native-paper-dates';
import {enableFreeze} from 'react-native-screens';
import Container, {Service} from 'typedi';
import {checkVersion} from 'react-native-check-version';
import {LoggerService} from '@services/logger';
import {store} from '@lib/redux';
import {appActions} from '@app/state';

@Service()
export class StartUpService {
  public readonly soundService = Container.get(SoundService);
  public readonly featureFlag = Container.get(FeatureFlagService);
  public readonly logger = Container.get(LoggerService);

  public readonly prodFeatureFlags: FeatureFlag[] = [
    FeatureFlag.RUN,
    FeatureFlag.PROFILE,
    FeatureFlag.SETTINGS,
    FeatureFlag.GUEST_MODE,
    FeatureFlag.SIGN_UP,
  ];
  public readonly devFeatureFlags: FeatureFlag[] = [FeatureFlag.GOOGLE_SIGNON];

  constructor() {}

  public async initialize() {
    enableFreeze();
    registerTranslation('en', en);
    this.soundService.initialize();
    this._setFeatureFlags();
    this._configGoogleSignIn();
    await this._checkForStoreUpdates();
  }

  private async _checkForStoreUpdates() {
    try {
      const version = await checkVersion();
      store.dispatch(appActions.setUpdateRequired(version.needsUpdate));
    } catch (error) {
      this.logger.recordError(error);
    }
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

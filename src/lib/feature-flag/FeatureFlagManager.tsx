import type {FeatureFlag} from './feature-flag.constants';

class FeatureFlagManager {
  private readonly _enabledFeatures = new Set<FeatureFlag>();

  constructor() {}

  public addFlags(features: FeatureFlag[]): void {
    features.forEach(feature => this._enabledFeatures.add(feature));
  }

  public isEnabled(flags: FeatureFlag[]): boolean {
    return flags.some(flag => this._enabledFeatures.has(flag));
  }
}

const featureFlagManager = new FeatureFlagManager();

export default featureFlagManager;

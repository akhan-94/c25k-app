import {Service} from 'typedi';
import type {FeatureFlag} from './feature-flag.constants';

@Service()
export class FeatureFlagService {
  private readonly _enabledFeatures = new Set<FeatureFlag>();

  constructor() {}

  public addFlags(features: FeatureFlag[]): void {
    features.forEach(feature => this._enabledFeatures.add(feature));
  }

  public isEnabled(flags: FeatureFlag[]): boolean {
    return flags.some(flag => this._enabledFeatures.has(flag));
  }
}

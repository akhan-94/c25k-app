import Container from 'typedi';
import {FeatureFlagService} from './FeatureFlag.service';

export const useFeatureFlag = () => {
  const featureFlag = Container.get(FeatureFlagService);
  return featureFlag;
};

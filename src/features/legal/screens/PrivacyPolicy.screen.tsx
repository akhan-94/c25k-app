import {ScreenWrapper} from '@shared/components';
import {MarkDown} from '@shared/components/mark-down';
import * as React from 'react';
import {PrivacyPolicyContent} from '../constants/privacy-policy';
import {View} from 'react-native';
import {appTheme} from '@lib/theme';

export const PrivacyPolicyScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{paddingBottom: appTheme.spacing.large}}>
        <MarkDown content={PrivacyPolicyContent}></MarkDown>
      </View>
    </ScreenWrapper>
  );
};

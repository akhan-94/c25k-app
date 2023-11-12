import {appTheme} from '@lib/theme';
import {ScreenWrapper} from '@shared/components';
import {MarkDown} from '@shared/components/mark-down';
import * as React from 'react';
import {View} from 'react-native';
import {TermsContent} from '../constants/terms';

export const TermsScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{paddingBottom: appTheme.spacing.large}}>
        <MarkDown content={TermsContent}></MarkDown>
      </View>
    </ScreenWrapper>
  );
};

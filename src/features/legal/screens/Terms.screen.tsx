import {ScreenWrapper} from '@shared/components';
import {MarkDown} from '@shared/components/mark-down';
import * as React from 'react';
import {TermsContent} from '../constants/terms';
import {View} from 'react-native';
import {spacing} from '@shared/styles';

export const TermsScreen = () => {
  return (
    <ScreenWrapper>
      <View style={{paddingBottom: spacing.large}}>
        <MarkDown content={TermsContent}></MarkDown>
      </View>
    </ScreenWrapper>
  );
};

import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {FlowerOfTheWeek} from '../components/FlowerOfTheWeek';

export const StartScreen = () => {
  return (
    <ScreenWrapper>
      <FlowerOfTheWeek />
    </ScreenWrapper>
  );
};

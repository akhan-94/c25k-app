import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlowerOfTheWeek} from '../components/FlowerOfTheWeek';
import {ScreenWrapper} from '@shared/components';

export const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <FlowerOfTheWeek />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
});

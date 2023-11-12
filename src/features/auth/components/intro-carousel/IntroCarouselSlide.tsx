import {appTheme} from '@lib/theme';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import type {IntroCarouselItem} from '../../types/intro-carousel.types';

export const IntroCarouselSlide = ({item}: {item: IntroCarouselItem}) => {
  return (
    <View style={itemStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    flex: 1,
    padding: appTheme.spacing.medium,
    borderRadius: 10,
  },
});

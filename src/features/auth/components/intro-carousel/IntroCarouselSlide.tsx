import {appTheme} from '@lib/theme';
import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import type {IntroCarouselItem} from '../../types/intro-carousel.types';

export const IntroCarouselSlide = ({item}: {item: IntroCarouselItem}) => {
  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        {item.title}
      </Text>
      <Text variant="titleSmall" style={styles.description}>
        {item.description}
      </Text>
      {/* <Image
        source={require('@assets/image.jpg')}
        style={styles.image}
        resizeMode={'cover'}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .06)',
    boxShadow: '10px 10px 10px rgba(255,255,255,1)',
    zIndex: 1,
    flex: 1,
    padding: appTheme.spacing.xlarge,
    borderRadius: 10,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'flex-end',
  },
  title: {
    position: 'relative',
    marginBottom: appTheme.spacing.medium,
    textAlign: 'right',
    zIndex: 2,
  },
  image: {
    position: 'absolute',
    zIndex: 1,
  },
  description: {
    zIndex: 2,
    position: 'relative',
    lineHeight: 24,
    maxWidth: '75%',
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
});

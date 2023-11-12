import {appTheme} from '@lib/theme';
import * as React from 'react';
import {View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const IntroCarouselPaginationButton: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
}> = props => {
  const {animValue, index, length} = props;
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: 'rgba(255,255,255,0.25)',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor: appTheme.colors.primary,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

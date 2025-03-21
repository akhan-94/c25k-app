import * as React from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

import {TEN_WEEK_PROGRAM} from '@shared/constants';
import Animated from 'react-native-reanimated';
import {appTheme} from '@lib/theme';
import {useSelector} from 'react-redux';
import {selectProgress, selectStatus} from '../selectors/run.selectors';

const PAGE_WIDTH = 80;
const PAGE_HEIGHT = 60;

const dayOptions = Object.keys(TEN_WEEK_PROGRAM).reduce((result, _, index) => {
  const days = [] as any;
  for (const day in TEN_WEEK_PROGRAM[index]) {
    days.push({
      week: index + 1,
      day: Number(day) + 1,
    });
  }
  return [...result, ...days];
}, [] as {week: number; day: number}[]);

export const DaySelector = ({
  setPreviewDay,
}: {
  setPreviewDay: React.Dispatch<
    React.SetStateAction<{
      week: number;
      day: number;
    } | null>
  >;
}) => {
  /** Refs */
  const r = React.useRef<ICarouselInstance>(null);

  /** Global state */
  const {week, day} = useSelector(selectProgress);
  const status = useSelector(selectStatus);

  const defaultIndex = React.useMemo(() => {
    return week * 7 + day;
  }, [week, day]);

  /** Functions */
  const onSnapToItem = React.useCallback(
    (index: number) => {
      const selectedDay = dayOptions[index];
      if (selectedDay.day === day && selectedDay.week === week)
        setPreviewDay(null);
      else setPreviewDay(dayOptions[index]);
    },
    [week, day, setPreviewDay],
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={r}
        loop={false}
        enabled={status === 'waiting'}
        defaultIndex={defaultIndex}
        style={{
          width: Dimensions.get('window').width,
          position: 'relative',
          left: 0,
          height: PAGE_HEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={dayOptions}
        onSnapToItem={onSnapToItem}
        renderItem={({item, animationValue}) => {
          return (
            <Item
              animationValue={animationValue}
              week={item.week.toString()}
              day={item.day.toString()}
              onPress={() => {
                if (status !== 'waiting') return;
                r.current?.scrollTo({
                  count: animationValue.value,
                  animated: true,
                });
              }}
            />
          );
        }}
        autoPlay={false}
      />
    </View>
  );
};

interface Props {
  animationValue: Animated.SharedValue<number>;
  week: string;
  day: string;
  onPress?: () => void;
}

const Item: React.FC<Props> = props => {
  const {animationValue, week, day, onPress} = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#b6bbc0', '#0071fa', '#b6bbc0'],
    );

    return {
      transform: [{scale}, {translateY: translateY.value}],
      color,
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-8, {duration: 250});
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, {duration: 250});
  }, [translateY]);

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          containerStyle,
        ]}>
        <Animated.Text style={[{fontSize: 9, color: '#26292E'}, labelStyle]}>
          <Text>Week {week}</Text>
        </Animated.Text>
        <Animated.Text style={[{fontSize: 14, color: '#26292E'}, labelStyle]}>
          <Text>Day {day}</Text>
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: appTheme.spacing.medium,
    paddingBottom: appTheme.spacing.medium,
  },
});

import * as React from 'react';
import {Dimensions, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {INTRO_CAROUSEL_DATA} from '../../constants/intro-carousel.constants';
import {IntroCarouselPaginationButton} from './IntroCarouselPaginationButton';
import {IntroCarouselSlide} from './IntroCarouselSlide';

const PAGE_WIDTH = Dimensions.get('screen').width;

export const IntroCarousel = ({height}: {height: number | null}) => {
  const progressValue = useSharedValue<number>(0);
  if (height === null) return null;
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Carousel
        height={height - 50}
        width={PAGE_WIDTH}
        vertical={false}
        style={{
          width: PAGE_WIDTH,
        }}
        loop
        pagingEnabled={true}
        snapEnabled={true}
        autoPlay={false}
        autoPlayInterval={5000}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={INTRO_CAROUSEL_DATA}
        renderItem={({item}) => <IntroCarouselSlide item={item} />}
      />
      {!!progressValue && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 100,
            alignSelf: 'center',
          }}>
          {INTRO_CAROUSEL_DATA.map((backgroundColor, index) => {
            return (
              <IntroCarouselPaginationButton
                backgroundColor={'red'}
                animValue={progressValue}
                index={index}
                key={index}
                isRotate={false}
                length={INTRO_CAROUSEL_DATA.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

import type BottomSheet from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {IntroCarousel} from '../components/intro-carousel/IntroCarousel';
import {LoginSheet} from '../components/LoginSheet';
import {loginStyles} from '../styles';

export const LoginScreen = () => {
  /** Refs */
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  /** Hooks */
  const navigation = useNavigation();

  /** Local State */
  const [carouselHeight, setCarouselHeight] = React.useState<number | null>(
    null,
  );

  return (
    <ScreenWrapper withScrollView={false} style={loginStyles.layout.container}>
      <View style={loginStyles.layout.main}>
        <Button
          style={{alignSelf: 'flex-end'}}
          mode="text"
          compact
          onPress={() => console.log('Pressed')}>
          Continue as guest
        </Button>
        {/* <AppLogo /> */}
        <View
          style={{flex: 1}}
          onLayout={event => {
            const {height} = event.nativeEvent.layout;
            setCarouselHeight(height);
          }}>
          <IntroCarousel height={carouselHeight} />
        </View>
      </View>
      <View style={loginStyles.layout.footer}>
        <View>
          <Text style={loginStyles.text.legal} variant="titleSmall">
            By continuing you are agreeing to our{'\n'}
            <Text
              style={loginStyles.text.legalLink}
              onPress={() =>
                navigation.navigate('Legal', {screen: 'Privacy policy'})
              }>
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text
              style={loginStyles.text.legalLink}
              onPress={() =>
                navigation.navigate('Legal', {screen: 'Terms of service'})
              }>
              Terms of Service
            </Text>
          </Text>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            icon="google-plus"
            style={loginStyles.button.primary}>
            Continue with Google
          </Button>
          <Button
            mode="contained"
            onPress={() => bottomSheetRef.current?.expand()}
            style={loginStyles.button.primary}>
            Login
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Registration')}>
            Don&lsquo;t have an account? Sign up
          </Button>
        </View>
      </View>
      <LoginSheet sheetRef={bottomSheetRef} />
    </ScreenWrapper>
  );
};

import {useNavigation} from '@react-navigation/native';
import {LoginButton} from '@shared/components/login-button';
import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {LoginHeader} from '../components/LoginHeader';
import {IntroCarousel} from '../components/intro-carousel/IntroCarousel';
import {loginStyles} from '../styles';
import NotificationManager from '@lib/notification';

export const LoginScreen = () => {
  /** Hooks */
  const navigation = useNavigation();

  /** Local State */
  const [carouselHeight, setCarouselHeight] = React.useState<number | null>(
    null,
  );

  return (
    <View style={loginStyles.layout.container}>
      <View style={loginStyles.layout.main}>
        <LoginHeader />
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
          <Text style={loginStyles.text.legal} variant="bodySmall">
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
          <LoginButton />
          <Button
            mode="contained"
            icon="google-plus"
            onPress={() => NotificationManager.test()}
            style={loginStyles.button.primary}>
            Continue with Google
          </Button>
          <Button
            mode="contained"
            icon="apple"
            style={loginStyles.button.primary}>
            Continue with Apple
          </Button>
          <Button
            mode="text"
            style={loginStyles.button.primary}
            onPress={() => navigation.navigate('Auth', {screen: 'Sign Up'})}>
            Don&lsquo;t have an account? Sign up
          </Button>
        </View>
      </View>
    </View>
  );
};

import {useNavigation} from '@react-navigation/native';
import {GoogleSignOnButton} from '@shared/components/google-signon-button';
import {LoginButton} from '@shared/components/login-button';
import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginHeader} from '../components/LoginHeader';
import {IntroCarousel} from '../components/intro-carousel/IntroCarousel';
import {loginStyles} from '../styles';
import {FeatureFlag, useFeatureFlag} from '@services/feature-flag';

export const LoginScreen = () => {
  /** Hooks */
  const navigation = useNavigation();
  const featureFlag = useFeatureFlag();

  /** Local State */
  const [carouselHeight, setCarouselHeight] = React.useState<number | null>(
    null,
  );

  return (
    <SafeAreaView style={loginStyles.layout.container}>
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
        <View style={loginStyles.button.buttonGroup}>
          <LoginButton />
          {featureFlag.isEnabled([FeatureFlag.GOOGLE_SIGNON]) && (
            <GoogleSignOnButton type="login" />
          )}
          {featureFlag.isEnabled([FeatureFlag.APPLE_SIGNON]) && (
            <Button mode="contained" icon="apple">
              Continue with Apple
            </Button>
          )}
          {featureFlag.isEnabled([FeatureFlag.SIGN_UP]) && (
            <Button
              mode="text"
              onPress={() => navigation.navigate('Auth', {screen: 'Sign Up'})}>
              Don&lsquo;t have an account? Sign up
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

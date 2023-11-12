import BottomSheet from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '@shared/components';
import type {AuthError} from '@supabase/supabase-js';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {supabase} from 'src/lib/supabase';
import {authCommonStyles, loginStyles} from '../styles';

// const image = require('../image.png');
// import image2 from '../image.png';
export const LoginScreen = () => {
  /** Hooks */
  const navigation = useNavigation();

  /** Local State */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [flatTextSecureEntry, setFlatTextSecureEntry] = React.useState(true);
  const [error, setError] = React.useState<AuthError | null>(null);

  /** Derived State */
  const disableSubmitButton = !email || !password || isLoading;
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // variables
  const snapPoints = React.useMemo(() => ['45%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  /** Functions */
  const handleClosePress = () => bottomSheetRef.current?.expand();

  const login = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error);
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    } finally {
      setEmail('');
      setPassword('');
      setIsLoading(false);
    }
  }, [email, password]);

  return (
    <>
      <ScreenWrapper withScrollView={false} style={loginStyles.layout.main}>
        <View>
          <Text style={loginStyles.text.legal} variant="titleSmall">
            By continuing you are agreeing to our{' '}
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
            loading={isLoading}
            style={loginStyles.button.primary}>
            Continue with Google
          </Button>
          <Button
            mode="contained"
            onPress={handleClosePress}
            loading={isLoading}
            style={loginStyles.button.primary}>
            Login
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.navigate('Registration')}
            loading={isLoading}>
            Don&lsquo;t have an account? Sign up
          </Button>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose>
          <View style={styles.contentContainer}>
            {error && <Text>{error.message}</Text>}
            <TextInput
              dense
              placeholder="Email"
              value={email}
              mode="outlined"
              onChangeText={text => setEmail(text)}
              style={authCommonStyles.inputContainer}
            />
            <TextInput
              dense
              placeholder="Password"
              value={password}
              mode="outlined"
              secureTextEntry={flatTextSecureEntry}
              right={
                <TextInput.Icon
                  icon={flatTextSecureEntry ? 'eye' : 'eye-off'}
                  onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
                  forceTextInputFocus={false}
                />
              }
              onChangeText={text => setPassword(text)}
              style={authCommonStyles.inputContainer}
            />

            <Button
              mode="contained"
              onPress={login}
              loading={isLoading}
              disabled={disableSubmitButton}>
              Login
            </Button>
          </View>
        </BottomSheet>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7f1e5',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 17,
    paddingLeft: 17,
  },
});

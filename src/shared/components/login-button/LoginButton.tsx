import type {
  BottomSheetBackdropProps,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import {supabase} from '@lib/supabase';
import {appTheme} from '@lib/theme';
import {useErrorHandler} from '@shared/hooks';
import type {AuthError} from '@supabase/supabase-js';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Portal, Text, TextInput} from 'react-native-paper';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const LoginButton = () => {
  /** Refs */
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  /** Hooks */
  const handleError = useErrorHandler();

  /** Local state */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [flatTextSecureEntry, setFlatTextSecureEntry] = React.useState(true);
  const [error, setError] = React.useState<AuthError | null>(null);

  /** Derived State */
  const disableSubmitButton = !email || !password || isLoading;
  const snapPoints = React.useMemo(() => ['45%'], []);

  /** Functions */
  const login = React.useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const {error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) handleError(error.message);
    } catch (error) {
      handleError('failed to login', error);
    } finally {
      setEmail('');
      setPassword('');
      setIsLoading(false);
    }
  }, [email, password, handleError]);

  return (
    <>
      <Button mode="contained" onPress={() => bottomSheetRef.current?.expand()}>
        Login
      </Button>
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          backgroundComponent={BottomSheetBackground}
          backdropComponent={BottomSheetBackdrop}
          enablePanDownToClose>
          <View style={styles.contentContainer}>
            {error && <Text>{error.message}</Text>}
            <TextInput
              dense
              placeholder="Email"
              value={email}
              mode="outlined"
              onChangeText={text => setEmail(text)}
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
      </Portal>
    </>
  );
};

const BottomSheetBackground = ({
  style,
  animatedIndex,
}: BottomSheetBackgroundProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [appTheme.colors.surface, appTheme.colors.surface],
    ),
  }));
  const containerStyle = React.useMemo(
    () => [style, containerAnimatedStyle, styles.sheetBackground],
    [style, containerAnimatedStyle],
  );
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

const styles = StyleSheet.create({
  sheetBackground: {
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 17,
    paddingLeft: 17,
  },
});

const BottomSheetBackdrop = ({
  animatedIndex,
  style,
}: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));
  const containerStyle = React.useMemo(
    () => [
      style,
      {
        backgroundColor: '#fff',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

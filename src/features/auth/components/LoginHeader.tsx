import {AppLogo} from '@shared/components/app-logo';
import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {toggleGuestMode} from 'src/app/state/app.slice';

export const LoginHeader = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Functions */
  const skipLogin = () => {
    dispatch(toggleGuestMode());
  };

  return (
    <View style={styles.container}>
      <View>
        <AppLogo />
      </View>
      <View>
        <Button
          style={{alignSelf: 'flex-end'}}
          mode="text"
          compact
          onPress={() => skipLogin()}>
          Skip
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

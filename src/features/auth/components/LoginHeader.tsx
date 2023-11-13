import {AppLogo} from '@shared/components/app-logo';
import {useAppDispatch} from '@shared/hooks';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {appActions} from '@app/state';
import {appTheme} from '@lib/theme';
import FeatureFlagManager, {FeatureFlag} from '@lib/feature-flag';

export const LoginHeader = () => {
  /** Hooks */
  const dispatch = useAppDispatch();

  /** Functions */
  const skipLogin = () => {
    dispatch(appActions.toggleGuestMode());
  };

  return (
    <View style={styles.container}>
      <View>
        <AppLogo />
      </View>
      {FeatureFlagManager.isEnabled([FeatureFlag.GUEST_MODE]) && (
        <View>
          <Button
            style={{alignSelf: 'flex-end'}}
            mode="text"
            compact
            onPress={() => skipLogin()}>
            Skip
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: appTheme.spacing.medium,
    alignItems: 'center',
  },
});

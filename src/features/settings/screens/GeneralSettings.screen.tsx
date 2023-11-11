import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '@shared/components';
import {useAppDispatch, useAppSelector, useErrorHandler} from '@shared/hooks';
import {useAuth} from '@shared/hooks/useAuth';
import * as React from 'react';
import {Linking, Platform} from 'react-native';
import Config from 'react-native-config';
import InAppReview from 'react-native-in-app-review';
import {Divider, List, RadioButton} from 'react-native-paper';
import {RadioSettingItem} from '../components/RadioSettingItem';
import {SwitchSettingItem} from '../components/SwitchSettingItem';
import {
  selectSettingsState,
  setUnits,
  toggleSetting,
} from '../state/settings.slice';

export const GeneralSettingsScreen = () => {
  /** Hooks */
  const navigation = useNavigation();
  const {signOut} = useAuth();
  const dispatch = useAppDispatch();
  const handleError = useErrorHandler();

  /** Global state */
  const {darkMode, sound, vibrate, units} = useAppSelector(selectSettingsState);

  /** Functions */
  const rateApp = React.useCallback(() => {
    const canOpenInApp = InAppReview.isAvailable();
    if (!canOpenInApp) return;
    InAppReview.RequestInAppReview()
      .then(hasFlowFinishedSuccessfully => {
        console.log('InAppReview in android', hasFlowFinishedSuccessfully);
        console.log(
          'InAppReview in ios has launched successfully',
          hasFlowFinishedSuccessfully,
        );
        // if (hasFlowFinishedSuccessfully) {
        // }
      })
      .catch(error => {
        handleError('failed to open in-app rating', error);
      });
  }, [handleError]);

  const logout = React.useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      handleError('failed to logout', error);
    }
  }, [signOut, handleError]);

  const deleteAccount = React.useCallback(async () => {
    try {
      console.log('delete account');
    } catch (error) {
      handleError('failed to delete account', error);
    }
  }, [handleError]);

  const openEmailClient = React.useCallback(async () => {
    if (!Config.SUPPORT_EMAIL) return;
    try {
      Linking.openURL(`mailto:${Config.SUPPORT_EMAIL}`);
    } catch (error) {
      handleError('failed to logout', error);
    }
  }, [handleError]);

  return (
    <ScreenWrapper noPadding>
      <List.Section title="Preferences">
        <RadioSettingItem
          title="Units"
          description={units === 'imperial' ? 'Imperial' : 'Metric'}
          dialogTitle="Choose unit system"
          content={dismiss => (
            <>
              <List.Item
                title="Metric"
                right={() => (
                  <RadioButton
                    value="metric"
                    status={units === 'metric' ? 'checked' : 'unchecked'}
                  />
                )}
                onPress={() => {
                  dispatch(setUnits('metric'));
                  dismiss();
                }}
              />
              <List.Item
                title="Imperial"
                right={() => (
                  <RadioButton
                    value="imperial"
                    status={units === 'imperial' ? 'checked' : 'unchecked'}
                  />
                )}
                onPress={() => {
                  dispatch(setUnits('imperial'));
                  dismiss();
                }}
              />
            </>
          )}
        />
        <SwitchSettingItem
          title="Vibrate"
          value={vibrate}
          onPress={() => dispatch(toggleSetting('vibrate'))}
        />
        <SwitchSettingItem
          title="Sound"
          value={sound}
          onPress={() => dispatch(toggleSetting('sound'))}
        />
        <SwitchSettingItem
          title="Dark mode"
          value={darkMode}
          onPress={() => dispatch(toggleSetting('darkMode'))}
        />
      </List.Section>
      <Divider />
      <List.Section title="Account">
        <List.Item title="Push notifications" />
        <List.Item title="Logout" onPress={() => logout()} />
        <List.Item title="Delete account" onPress={deleteAccount} />
      </List.Section>
      <Divider />
      <List.Section title="Legal">
        <List.Item
          title="Privacy policy"
          onPress={() =>
            navigation.navigate('Legal', {screen: 'Privacy policy'})
          }
        />
        <List.Item
          title="Terms of service"
          onPress={() =>
            navigation.navigate('Legal', {screen: 'Terms of service'})
          }
        />
      </List.Section>
      <Divider />
      <List.Section title="Support">
        <List.Item title="Email us" onPress={openEmailClient} />
        <List.Item
          title={`Rate on ${
            Platform.OS === 'android' ? 'Google Play' : 'App Store'
          }`}
          onPress={rateApp}
        />
      </List.Section>
    </ScreenWrapper>
  );
};

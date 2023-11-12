import {useNavigation} from '@react-navigation/native';
import {ScreenWrapper} from '@shared/components';
import {useAppDispatch, useAppSelector, useErrorHandler} from '@shared/hooks';
import {useAuth} from '@shared/hooks/useAuth';
import * as React from 'react';
import {Linking, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {Divider, List, Text} from 'react-native-paper';
import {DeleteAccount} from '../components/DeleteAccount';
import {RateApp} from '../components/RateApp';
import {SwitchSettingItem} from '../components/SwitchSettingItem';
import {Units} from '../components/Units';
import {getBuildNumber, getVersion} from 'react-native-device-info';
import {selectSettingsState, toggleSetting} from '../state/settings.slice';
import {appTheme} from '@lib/theme';
import {selectGuestMode} from 'src/app/selectors/app.selectors';

const versionName = getVersion();
const versionCode = getBuildNumber();

export const GeneralSettingsScreen = () => {
  /** Hooks */
  const navigation = useNavigation();
  const {signOut} = useAuth();
  const dispatch = useAppDispatch();
  const handleError = useErrorHandler();

  /** Global state */
  const {darkMode, sound, vibrate} = useAppSelector(selectSettingsState);
  const isGuest = useAppSelector(selectGuestMode);

  /** Functions */
  const logout = React.useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      handleError('failed to logout', error);
    }
  }, [signOut, handleError]);

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
        <Units />
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
        {!isGuest && (
          <>
            <List.Item title="Logout" onPress={logout as any} />
            <DeleteAccount />
          </>
        )}
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
        <List.Item title="Email us" onPress={openEmailClient as any} />
        <RateApp />
      </List.Section>
      <Divider />
      <Text variant="labelSmall" style={styles.versionContainer}>
        v{versionName} ({versionCode})
      </Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  versionContainer: {
    padding: appTheme.spacing.medium,
    textAlign: 'right',
  },
});

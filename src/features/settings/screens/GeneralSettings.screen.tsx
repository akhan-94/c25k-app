import {ScreenWrapper} from '@shared/components';
import * as React from 'react';
import {Divider, List} from 'react-native-paper';
import {RadioSettingItem} from '../components/RadioSettingItem';
import {SwitchSettingItem} from '../components/SwitchSettingItem';
import {useAuth} from '@shared/hooks/useAuth';

export const GeneralSettingsScreen = () => {
  /** Hooks */
  const {signOut} = useAuth();

  return (
    <ScreenWrapper noPadding>
      <List.Section title="Preferences">
        <RadioSettingItem
          title="Units"
          description="Metric"
          dialogTitle="Choose unit system"
        />
        <SwitchSettingItem title="Vibrate" />
        <SwitchSettingItem title="Sound" />
        <SwitchSettingItem title="Dark mode" />
      </List.Section>
      <Divider />
      <List.Section title="Account">
        <List.Item title="Push notifications" />
        <List.Item title="Logout" onPress={signOut} />
        <List.Item title="Delete account" />
      </List.Section>
      <Divider />
      <List.Section title="Legal">
        <List.Item title="Privacy policy" />
        <List.Item title="Terms of service" />
      </List.Section>
      <Divider />
      <List.Section title="Support">
        <List.Item title="Email" />
        <List.Item title="Rate app on Google Play Store" />
      </List.Section>
    </ScreenWrapper>
  );
};

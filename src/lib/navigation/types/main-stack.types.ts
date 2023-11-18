import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Achievements: NavigatorScreenParams<AchievementsParamList>;
  Run: NavigatorScreenParams<RunParamList>;
  Settings: NavigatorScreenParams<SettingsParamList>;
  Reminders: NavigatorScreenParams<RemindersParamList>;
  Profile: NavigatorScreenParams<ProfileParamList>;
  History: NavigatorScreenParams<HistoryParamList>;
};

export type RunParamList = {
  MainRun: undefined;
  Summary: undefined;
};

export type AchievementsParamList = {
  'Main Achievements': undefined;
};

export type ProfileParamList = {
  'My Profile': undefined;
};

export type HistoryParamList = {
  'Run History': undefined;
};

export type SettingsParamList = {
  'General Settings': undefined;
  'Notifications Settings': undefined;
};

export type RemindersParamList = {
  'Set up reminder': undefined;
};

export type MainNavigatorProps = NativeStackScreenProps<MainStackParamList>;

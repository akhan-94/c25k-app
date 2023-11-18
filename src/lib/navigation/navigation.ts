import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootStackParamList} from './types/root-stack.types';
import type {
  AchievementsParamList,
  HistoryParamList,
  ProfileParamList,
  RemindersParamList,
  RunParamList,
  SettingsParamList,
} from './types/main-stack.types';
import type {AuthStackParamList} from './types/auth-stack.types';
import type {LegalStackParamList} from './types/legal-stack.types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import type {MainStackParamList} from '@app/types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = createDrawerNavigator<MainStackParamList>();
export const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export const LegalStack = createNativeStackNavigator<LegalStackParamList>();
export const SettingsStack = createNativeStackNavigator<SettingsParamList>();

export const ProfileStack = createNativeStackNavigator<ProfileParamList>();
export const RemindersStack = createNativeStackNavigator<RemindersParamList>();
export const RunStack = createNativeStackNavigator<RunParamList>();
export const AchievementsStack =
  createNativeStackNavigator<AchievementsParamList>();
export const HistoryStack = createNativeStackNavigator<HistoryParamList>();

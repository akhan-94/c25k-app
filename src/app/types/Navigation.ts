import type {AchievementsNavigatorParamList} from '@features/achievements';
import type {AuthNavigatorParamList} from '@features/auth';
import type {HistoryStackParamList} from '@features/history';
import type {LegalNavigatorParamList} from '@features/legal';
import type {ProfileStackParamList} from '@features/profile';
import type {RemindersStackParamList} from '@features/reminders';
import type {RunNavigatorParamList} from '@features/run';
import type {SettingsNavigatorParamList} from '@features/settings';

export type MainStackParamList = {
  Achievements: AchievementsNavigatorParamList;
  Run: RunNavigatorParamList;
  Settings: SettingsNavigatorParamList;
  Reminders: RemindersStackParamList;
  Profile: ProfileStackParamList;
  History: HistoryStackParamList;
};

export type MainNavigatorParamList = {
  screen?: keyof MainStackParamList;
};
export type RootStackParamList = {
  Main: MainNavigatorParamList;
  Loading: undefined;
  Auth: AuthNavigatorParamList;
  Legal: LegalNavigatorParamList;
};

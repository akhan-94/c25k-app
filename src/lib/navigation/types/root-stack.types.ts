import type {MainStackParamList} from '@app/types';
import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {AuthStackParamList} from './auth-stack.types';
import type {LegalStackParamList} from './legal-stack.types';

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParamList>;
  Loading: undefined;
  UpdateRequired: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Legal: NavigatorScreenParams<LegalStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootNavigatorProps = NativeStackScreenProps<RootStackParamList>;

declare global {
  // eslint-disable-next-line
  namespace ReactNavigation {
    // eslint-disable-next-line
    interface RootParamList extends RootStackParamList {}
  }
}

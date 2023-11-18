import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined;
  'Sign Up': undefined;
  'Forgot Password': undefined;
};

export type AuthNavigatorProps = NativeStackScreenProps<AuthStackParamList>;

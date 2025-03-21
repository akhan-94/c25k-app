import {SupabaseClient} from '@lib/supabase';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useErrorHandler} from '@shared/hooks';
import * as React from 'react';
import {Button} from 'react-native-paper';

export interface GoogleSignOnButtonProps {
  type: 'signup' | 'login';
}

export const GoogleSignOnButton = ({
  type = 'login',
}: GoogleSignOnButtonProps) => {
  /** Hooks */
  const handleError = useErrorHandler();

  /** Functions */
  const login = React.useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      if (!idToken) return;
      await SupabaseClient.auth.signInWithIdToken({
        provider: 'google',
        token: idToken,
      });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        handleError('User cancelled login', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        handleError('Sign up already in progress', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        handleError('Play services not available or outdated', error);
      } else {
        handleError('Something went wrong', error);
      }
    }
  }, [handleError]);

  return (
    <Button
      mode="contained"
      icon="google-plus"
      onPress={() => {
        login();
      }}>
      {type === 'login' ? 'Continue with Google' : 'Sign up with Google'}
    </Button>
  );
};

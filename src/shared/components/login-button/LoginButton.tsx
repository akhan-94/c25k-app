import type {BottomSheetModal} from '@gorhom/bottom-sheet';
import {supabase} from '@lib/supabase';
import {useErrorHandler} from '@shared/hooks';
import type {FormikHelpers} from 'formik';
import {Formik} from 'formik';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {FormikInput} from '../formik-input';
import {OrDivider} from '../or-divider';
import {
  LOGIN_FORM_INITIAL_VALUES,
  LOGIN_FORM_SCHEMA,
} from './LoginButton.constants';
import type {LoginFormValues} from './LoginButton.types';
import {ModalContainer} from './components/ModalContainer';

export interface LoginButtonProps {
  enableThirdPartyLogin?: boolean;
}

export const LoginButton = ({
  enableThirdPartyLogin = false,
}: LoginButtonProps) => {
  /** Refs */
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);

  /** Hooks */
  const handleError = useErrorHandler();

  /** Functions */
  const login = React.useCallback(
    async (
      {email, password}: LoginFormValues,
      actions: FormikHelpers<LoginFormValues>,
    ) => {
      try {
        actions.setSubmitting(true);
        const {error} = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) handleError(error.message);
      } catch (error) {
        handleError('failed to login', error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [handleError],
  );

  return (
    <>
      <Button
        mode="contained"
        onPress={() => {
          bottomSheetRef.current?.present();
        }}>
        Login
      </Button>
      <ModalContainer
        sheetRef={bottomSheetRef}
        enableThirdPartyLogin={enableThirdPartyLogin}>
        <Formik
          initialValues={LOGIN_FORM_INITIAL_VALUES}
          validationSchema={LOGIN_FORM_SCHEMA}
          onSubmit={login}>
          {formikProps => (
            <View style={styles.container}>
              <FormikInput<LoginFormValues> name="email" label="Email" />
              <FormikInput<LoginFormValues>
                name="password"
                label="Password"
                type="password"
              />
              <Button
                mode="contained"
                onPress={() => formikProps.handleSubmit()}
                loading={formikProps.isSubmitting}
                style={styles.submitButton}>
                Login
              </Button>
              {enableThirdPartyLogin && (
                <>
                  <OrDivider spacing="small" />
                  <Button mode="contained" icon="google-plus">
                    Continue with Google
                  </Button>
                </>
              )}
            </View>
          )}
        </Formik>
      </ModalContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  submitButton: {
    marginTop: 7,
  },
});

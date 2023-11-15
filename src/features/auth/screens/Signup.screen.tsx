import {supabase} from '@lib/supabase';
import {appTheme} from '@lib/theme';
import {ScreenWrapper} from '@shared/components';
import {FormikInput} from '@shared/components/formik-input';
import {OrDivider} from '@shared/components/or-divider';
import {useErrorHandler} from '@shared/hooks';
import type {FormikHelpers} from 'formik';
import {Formik} from 'formik';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {DatePickerInput} from 'react-native-paper-dates';
import {
  SIGN_UP_FORM_INITIAL_VALUES,
  SignupSchema,
} from '../constants/sign-up-form.constants';
import type {SignUpFormValues} from '../types/sign-up-form.types';
import FeatureFlagManager, {FeatureFlag} from '@lib/feature-flag';
import {GoogleSignOnButton} from '@shared/components/google-signon-button';

export const SignUpScreen = () => {
  /** Hooks */
  const handleError = useErrorHandler();

  /** Functions */
  const createAccount = React.useCallback(
    async (
      {email, birthdate, firstName, lastName, password}: SignUpFormValues,
      actions: FormikHelpers<SignUpFormValues>,
    ) => {
      try {
        actions.setSubmitting(true);
        const {error} = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
              birthdate: birthdate,
            },
          },
        });
        const {
          data: {user},
        } = await supabase.auth.getUser();
        if (user) {
          const metadata = user.user_metadata;
        }
        if (error) {
          handleError(error.message);
        }
      } catch (error) {
        handleError('failed to create account', error);
      }
    },
    [handleError],
  );

  return (
    <ScreenWrapper>
      <Formik
        initialValues={SIGN_UP_FORM_INITIAL_VALUES}
        onSubmit={createAccount}
        validationSchema={SignupSchema}>
        {formikProps => (
          <View style={styles.formContainer}>
            <View style={styles.nameContainer}>
              <View style={styles.cell}>
                <FormikInput<SignUpFormValues>
                  name="firstName"
                  label="First name"
                />
              </View>
              <View style={styles.cell}>
                <FormikInput<SignUpFormValues>
                  name="lastName"
                  label="Last name"
                />
              </View>
            </View>
            <DatePickerInput
              locale="en"
              label="Birthdate"
              mode="outlined"
              value={
                formikProps.values.birthdate
                  ? new Date(formikProps.values.birthdate)
                  : undefined
              }
              onChange={value => {
                if (!value) return;
                const handler = formikProps.handleChange('birthdate');
                handler(value.toISOString());
              }}
              inputMode="start"
            />
            <FormikInput<SignUpFormValues> name="email" label="Email" />
            <FormikInput<SignUpFormValues>
              name="password"
              label="Pasword"
              type="password"
            />
            <FormikInput<SignUpFormValues>
              name="passwordConfirmation"
              label="Confirm password"
              type="password"
            />
            <Button
              mode="contained"
              onPress={() => formikProps.handleSubmit()}
              loading={formikProps.isSubmitting}
              style={styles.submitButton}>
              Create account
            </Button>
          </View>
        )}
      </Formik>
      {FeatureFlagManager.isEnabled([
        FeatureFlag.GOOGLE_SIGNON,
        FeatureFlag.APPLE_SIGNON,
      ]) && (
        <>
          <OrDivider spacing="large" />
          <GoogleSignOnButton type="signup" />
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: appTheme.spacing.xsmall,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: appTheme.spacing.xsmall,
  },
  cell: {
    flex: 1,
  },
  submitButton: {
    marginTop: appTheme.spacing.medium,
  },
});

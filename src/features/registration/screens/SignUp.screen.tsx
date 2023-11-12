import {appTheme} from '@lib/theme';
import {ScreenWrapper} from '@shared/components';
import {OrDivider} from '@shared/components/or-divider';
import {useErrorHandler} from '@shared/hooks';
import type {FormikHelpers, FormikProps} from 'formik';
import {Formik} from 'formik';
import * as React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {
  DatePickerInput,
  en,
  registerTranslation,
} from 'react-native-paper-dates';
import {
  SIGN_UP_FORM_INITIAL_VALUES,
  SignupSchema,
} from '../constants/sign-up-form.constants';
import type {
  SignUpFormFields,
  SignUpFormValues,
} from '../types/sign-up-form.types';

registerTranslation('en', en);

export const SignUpScreen = () => {
  /** Hooks */
  const handleError = useErrorHandler();

  /** Functions */
  const createAccount = React.useCallback(
    async (
      values: SignUpFormValues,
      actions: FormikHelpers<SignUpFormValues>,
    ) => {
      actions.setSubmitting(true);
      Alert.alert('create account', JSON.stringify(values, null, 2));
      // try {
      //   const {data, error} = await supabase.auth.signUp({
      //     email,
      //     password,
      //   });
      //   console.log(JSON.stringify(data, null, 2));
      //   if (error) console.log(error);
      // } catch (error) {
      //   handleError('failed to create account', error);
      // }
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
                <InputField
                  fieldName="firstName"
                  label="First name"
                  formikProps={formikProps}
                />
              </View>
              <View style={styles.cell}>
                <InputField
                  fieldName="lastName"
                  label="Last name"
                  formikProps={formikProps}
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
            <InputField
              fieldName="email"
              label="Email"
              formikProps={formikProps}
            />
            <InputField
              fieldName="password"
              label="Password"
              formikProps={formikProps}
            />
            <InputField
              fieldName="passwordConfirmation"
              label="Confirm Password"
              formikProps={formikProps}
            />
            <Button
              mode="contained"
              onPress={() => formikProps.handleSubmit()}
              loading={formikProps.isSubmitting}>
              Create account
            </Button>
          </View>
        )}
      </Formik>
      <OrDivider spacing="large" />
      <Button
        mode="contained"
        onPress={() => console.log('Pressed')}
        icon="google-plus">
        Sign up with Google
      </Button>
    </ScreenWrapper>
  );
};
export const InputField = ({
  label,
  fieldName,
  formikProps,
}: {
  label: string;
  fieldName: SignUpFormFields;
  formikProps: FormikProps<SignUpFormValues>;
}) => {
  /** Props */
  const {values, errors, touched, handleBlur, handleChange} = formikProps;

  /** Derived state */
  const hasError = Boolean(errors[fieldName] && touched[fieldName]);
  const isPassword =
    fieldName === 'password' || fieldName === 'passwordConfirmation';
  const errorMessage = errors[fieldName];

  /** Local state */
  const [flatTextSecureEntry, setFlatTextSecureEntry] =
    React.useState(isPassword);

  return (
    <View>
      <TextInput
        mode="outlined"
        keyboardType={fieldName === 'email' ? 'email-address' : 'default'}
        label={label}
        value={values[fieldName]}
        error={hasError}
        onBlur={handleBlur(fieldName)}
        onChangeText={handleChange(fieldName)}
        secureTextEntry={flatTextSecureEntry}
        right={
          isPassword && (
            <TextInput.Icon
              icon={flatTextSecureEntry ? 'eye' : 'eye-off'}
              onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
              forceTextInputFocus={false}
            />
          )
        }
      />
      {hasError && (
        <Text variant="bodySmall" style={styles.errorText}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: appTheme.spacing.medium,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: appTheme.spacing.medium,
  },
  cell: {
    flex: 1,
  },
  errorText: {
    paddingTop: appTheme.spacing.xsmall,
    color: appTheme.colors.onErrorContainer,
  },
});

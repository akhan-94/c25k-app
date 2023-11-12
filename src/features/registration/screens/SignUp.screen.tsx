import {ScreenWrapper} from '@shared/components';
import {useErrorHandler} from '@shared/hooks';
import {spacing} from '@shared/styles';
import * as React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {supabase} from 'src/lib/supabase';
import type {FormikProps} from 'formik';
import {Formik} from 'formik';
import {
  FORM_INITIAL_VALUES,
  SignupSchema,
} from '../constants/sign-up-form.constants';
import {appTheme} from '@lib/theme';

export const SignUpScreen = () => {
  /** Hooks */
  const handleError = useErrorHandler();

  /** Functions */
  const createAccount = React.useCallback(
    async ({
      email,
      firstName,
      lastName,
      password,
    }: typeof FORM_INITIAL_VALUES) => {
      Alert.alert(
        'create account',
        JSON.stringify({email, firstName, lastName, password}, null, 2),
      );
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
        initialValues={FORM_INITIAL_VALUES}
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
            <Button
              mode="contained"
              onPress={() => formikProps.handleSubmit()}
              loading={formikProps.isSubmitting}>
              Create
            </Button>
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};
export const InputField = ({
  label,
  fieldName,
  formikProps,
}: {
  label: string;
  fieldName: keyof typeof FORM_INITIAL_VALUES;
  formikProps: FormikProps<typeof FORM_INITIAL_VALUES>;
}) => {
  const {values, errors, touched, handleBlur, handleChange} = formikProps;
  const hasError = Boolean(errors[fieldName] && touched[fieldName]);
  const errorMessage = errors[fieldName];
  return (
    <View>
      <TextInput
        dense={true}
        keyboardType={fieldName === 'email' ? 'email-address' : 'default'}
        label={label}
        value={values[fieldName]}
        error={hasError}
        onBlur={handleBlur(fieldName)}
        onChangeText={handleChange(fieldName)}
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
    gap: spacing.medium,
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.medium,
  },
  cell: {
    flex: 1,
  },
  errorText: {
    paddingTop: spacing.xsmall,
    color: appTheme.colors.onErrorContainer,
  },
});

import {useFormikContext} from 'formik';
import * as React from 'react';
import type {KeyboardTypeOptions} from 'react-native';
import {View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import type {FormikInputProps} from './FormikInput.types';

export const FormikInput = <Values,>({
  label,
  name,
  type = 'text',
}: FormikInputProps<Values>) => {
  /** Hooks */
  const {values, touched, errors, handleBlur, handleChange} =
    useFormikContext<Values>();

  /** Local state */
  const [flatTextSecureEntry, setFlatTextSecureEntry] = React.useState(
    type === 'password',
  );

  /** Derived state */
  const keyboardType = React.useMemo((): KeyboardTypeOptions => {
    if (type === 'email') return 'email-address';
    return 'default';
  }, [type]);

  const hasError = Boolean(errors[name] && touched[name]);

  return (
    <View>
      <TextInput
        mode="outlined"
        keyboardType={keyboardType}
        label={label}
        value={values[name] as any}
        error={hasError}
        onBlur={handleBlur(name) as any}
        onChangeText={handleChange(name)}
        secureTextEntry={flatTextSecureEntry}
        right={
          type === 'password' && (
            <TextInput.Icon
              icon={flatTextSecureEntry ? 'eye' : 'eye-off'}
              onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
              forceTextInputFocus={false}
            />
          )
        }
      />
      {hasError && (
        <HelperText type="error" visible={hasError}>
          {(errors[name] as string | undefined) || ''}
        </HelperText>
      )}
    </View>
  );
};

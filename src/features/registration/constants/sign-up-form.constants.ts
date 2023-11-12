import * as Yup from 'yup';

export const FORM_INITIAL_VALUES: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  birthdate: Date | undefined;
} = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  birthdate: undefined,
};

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birthdate: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  ),
});

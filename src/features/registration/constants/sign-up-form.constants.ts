import * as Yup from 'yup';
import type {SignUpFormValues} from '../types/sign-up-form.types';

export const SIGN_UP_FORM_INITIAL_VALUES: SignUpFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  birthdate: '',
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

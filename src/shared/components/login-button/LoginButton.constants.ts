import * as Yup from 'yup';
import type {LoginFormValues} from './LoginButton.types';

export const LOGIN_FORM_INITIAL_VALUES: LoginFormValues = {
  email: '',
  password: '',
};

export const LOGIN_FORM_SCHEMA = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

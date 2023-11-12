import * as Yup from 'yup';

export const FORM_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

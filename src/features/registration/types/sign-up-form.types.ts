export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  birthdate: string;
}

export type SignUpFormFields = keyof SignUpFormValues;

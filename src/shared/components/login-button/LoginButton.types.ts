export interface LoginFormValues {
  email: string;
  password: string;
}

export type LoginFormFields = keyof LoginFormValues;

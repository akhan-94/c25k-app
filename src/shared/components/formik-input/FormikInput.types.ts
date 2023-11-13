export interface FormikInputProps<Values> {
  label: string;
  name: keyof Values;
  type?: 'text' | 'password' | 'email' | 'number';
}

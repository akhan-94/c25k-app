export const spacing = {
  xsmall: 5,
  small: 10,
  medium: 16,
  large: 20,
  xlarge: 30,
} as const;

export type Spacing = keyof typeof spacing;

import {MD3DarkTheme} from 'react-native-paper';

export const appTheme = {
  ...MD3DarkTheme,
  roundness: 10,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#00736b',
    onPrimary: '#fff',
    primaryContainer: 'rgb(114, 54, 0)',
    onPrimaryContainer: 'rgb(255, 220, 198)',
    secondary: 'rgb(255, 181, 158)',
    onSecondary: 'rgb(93, 24, 0)',
    secondaryContainer: '#61707d',
    onSecondaryContainer: 'rgb(255, 219, 208)',
    tertiary: 'rgb(255, 177, 194)',
    onTertiary: 'rgb(102, 0, 43)',
    tertiaryContainer: 'rgb(143, 0, 63)',
    onTertiaryContainer: 'rgb(255, 217, 223)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: '#0b0a0a',
    onBackground: 'rgb(236, 224, 218)',
    surface: '#26262c',
    onSurface: '#fff',
    surfaceVariant: '#0b0b0c',
    onSurfaceVariant: '#BDBDBD',
    outline: '#616161',
    outlineVariant: 'rgb(82, 68, 60)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(236, 224, 218)',
    inverseOnSurface: 'rgb(54, 47, 43)',
    inversePrimary: 'rgb(150, 73, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(43, 34, 29)',
      level2: '#26262c',
      level3: 'rgb(57, 43, 35)',
      level4: 'rgb(59, 45, 36)',
      level5: 'rgb(63, 48, 39)',
    },
    surfaceDisabled: 'rgba(236, 224, 218, 0.12)',
    onSurfaceDisabled: 'rgba(236, 224, 218, 0.38)',
    backdrop: 'rgba(58, 46, 38, 0.4)',
  },
  spacing: {
    xsmall: 5,
    small: 10,
    medium: 16,
    large: 20,
    xlarge: 30,
    xxlarge: 40,
  },
} as const;

export type AppThemeSpacing = keyof typeof appTheme.spacing;

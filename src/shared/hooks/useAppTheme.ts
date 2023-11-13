import {useTheme} from 'react-native-paper';
import type {appTheme} from '@lib/theme';

export type AppTheme = typeof appTheme;

export const useAppTheme = () => useTheme<AppTheme>();

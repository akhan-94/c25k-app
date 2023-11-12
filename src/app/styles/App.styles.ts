import {StyleSheet} from 'react-native';
import {DarkTheme} from '../utils/theme';

export const containers = StyleSheet.create({
  gestureHandler: {
    flex: 1,
    position: 'relative',
  },
  main: {
    flex: 1,
    position: 'relative',
    backgroundColor: DarkTheme.colors.background,
  },
});

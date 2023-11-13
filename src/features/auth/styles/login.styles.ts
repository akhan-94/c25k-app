import {appTheme} from '@lib/theme';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    minHeight: Dimensions.get('screen').height - (StatusBar.currentHeight || 0),
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  footer: {
    paddingBottom: appTheme.spacing.large,
    paddingHorizontal: appTheme.spacing.medium,
  },
});

export const button = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: appTheme.spacing.small,
  },
});

export const text = StyleSheet.create({
  legal: {
    textAlign: 'center',
    lineHeight: 20,
    paddingBottom: appTheme.spacing.medium,
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});

import {appTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
export const layout = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: (StatusBar.currentHeight || 0) + appTheme.spacing.medium,
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  footer: {},
});

export const button = StyleSheet.create({
  primary: {
    marginTop: appTheme.spacing.small,
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

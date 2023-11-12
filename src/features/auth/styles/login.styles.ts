import {appTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
export const layout = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  footer: {},
});

export const button = StyleSheet.create({
  primary: {
    marginBottom: appTheme.spacing.medium,
  },
});

export const text = StyleSheet.create({
  legal: {
    textAlign: 'center',
    paddingBottom: appTheme.spacing.medium,
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});

import {appTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

export const text = StyleSheet.create({
  versionDetails: {
    paddingLeft: appTheme.spacing.medium,
    paddingRight: appTheme.spacing.medium,
    textAlign: 'right',
  },
});

export const profileSectionStyles = StyleSheet.create({
  guestContainer: {
    marginTop: appTheme.spacing.medium,
  },
  signUpButton: {
    paddingTop: appTheme.spacing.xsmall,
    paddingBottom: appTheme.spacing.xsmall,
    marginTop: appTheme.spacing.xsmall,
    marginBottom: appTheme.spacing.xsmall,
    borderRadius: appTheme.roundness,
    overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpLabel: {
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: appTheme.spacing.medium,
  },
  nameContainer: {},
});

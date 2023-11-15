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
    paddingTop: appTheme.spacing.small,
    paddingBottom: appTheme.spacing.small,
    marginTop: appTheme.spacing.small,
    marginBottom: appTheme.spacing.small,
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
    flexDirection: 'column',
    paddingHorizontal: appTheme.spacing.medium,
    borderBottomColor: 'rgba(255, 255, 255, .1)',
    borderBottomWidth: 1,
    marginBottom: appTheme.spacing.medium,
  },
  nameContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingLeft: appTheme.spacing.medium,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: appTheme.spacing.medium,
    alignItems: 'center',
    gap: 10,
  },
});

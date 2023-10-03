import {StyleSheet} from 'react-native';

export const text = StyleSheet.create({
  versionDetails: {
    paddingBottom: 17,
    paddingRight: 17,
    textAlign: 'right',
  },
});

export const profileSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: 17,
    paddingTop: 17,
    paddingBottom: 17,
    paddingLeft: 17,
    alignItems: 'center',
    textAlign: 'right',
  },
  avatarContainer: {
    flex: 0,
  },
  nameContainer: {
    flex: 0,
    marginLeft: 16,
  },
});

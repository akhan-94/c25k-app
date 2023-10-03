import {StyleSheet} from 'react-native';

export const layout = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    // flex: 0,
    paddingBottom: 17,
    paddingRight: 17,
    paddingLeft: 17,
  },
});

export const button = StyleSheet.create({
  primary: {
    marginBottom: 10,
  },
});

export const text = StyleSheet.create({
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  legal: {
    textAlign: 'center',
    paddingBottom: 17,
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});

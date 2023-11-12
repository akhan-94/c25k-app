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

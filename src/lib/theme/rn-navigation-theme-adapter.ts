import {DefaultTheme} from '@react-navigation/native';
import {adaptNavigationTheme} from 'react-native-paper';

const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme});

export {DarkTheme};

import './wdyr';
import {AppRegistry} from 'react-native';
import {App} from '@app/App';
import {name as appName} from './app.json';
import StartUpManager from '@lib/startup';

StartUpManager.initialize();

AppRegistry.registerComponent(appName, () => App);

// needed to be loaded first for dependency injection / TypeDI
import 'reflect-metadata';
// needed for debugging / Why Did You Render
import './wdyr';
// Remaining app imports
import {App} from '@app/App';
import {StartUpService} from '@services/start-up';
import {AppRegistry} from 'react-native';
import Container from 'typedi';
import {name as appName} from './app.json';

const startUp = Container.get<StartUpService>(StartUpService);

startUp.initialize();

AppRegistry.registerComponent(appName, () => App);

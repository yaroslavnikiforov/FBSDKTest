import {AppRegistry} from 'react-native';
import {App} from './src/core/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

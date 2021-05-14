import {AppRegistry} from 'react-native';
import t from 'DokaanPOS/base64Polyfill';
import App from 'DokaanPOS/App';
import {name as appName} from 'DokaanPOS/app.json';
import {Provider} from 'react-redux';
import store from 'DokaanPOS/services/redux/store';
import React from 'react';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application, t);

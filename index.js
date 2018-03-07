import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

import App from './src/App';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>  
);

AppRegistry.registerComponent('Todo', () => Main);

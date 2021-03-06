import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppViewContainer from './src/modules/AppViewContainer';
console.disableYellowBox = true;
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

class SimpleOffsetPRO extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SimpleOffsetPRO', () => SimpleOffsetPRO);

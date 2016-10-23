import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import WeatherToday from './WeatherToday';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <View style={styles.container}>
          <WeatherToday />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import WeatherReport from './WeatherReport';
import Navigation from './Navigation';
import CurrentWeather from './CurrentWeather';
import DaySelection from './DaySelection';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Image 
          source={require('../images/night-sky-2.jpg')}
          style={styles.container}
        >
          <Navigation />
          <CurrentWeather />
          <WeatherReport />
          <DaySelection />
        </Image>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
  },
});
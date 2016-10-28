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
        <View style={styles.mainContainer}>
          <Image source={require('../images/night-sky.jpeg')} style={styles.container} resizeMode={Image.resizeMode.stretch}>
            <Navigation />
            <CurrentWeather />
            <WeatherReport />
            <DaySelection />
          </Image>
        </View>
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
  mainContainer: {
    flex: 1,

  },
});
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import Navigation from './Navigation';
import CurrentWeather from './CurrentWeather';
import DaySelection from './DaySelection';
import backgroundImage from '../images/night-sky-2.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: null,
    width: null,
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Image source={backgroundImage} style={styles.container}>
          <Navigation />
          <CurrentWeather />
          <DaySelection />
        </Image>
      </Provider>
    );
  }
}

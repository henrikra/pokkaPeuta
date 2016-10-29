import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import OneDayWeather from './OneDayWeather';
import Loader from './Loader';

class WeatherReport extends Component {

  render() {
    const { weatherReport: { forecast }, geolocation: { isLoading } } = this.props;
    const forecastsComponents = forecast
      .map((oneDayWeather, index) => (
        <OneDayWeather key={oneDayWeather.date} oneDayWeather={oneDayWeather} />
      ));

    return null;

    return (
      isLoading ? <Loader /> : (
        <ScrollView
          contentContainerStyle={styles.container}
          horizontal={true}
          snapToInterval={Dimensions.get('window').width - 45}
          snapToAlignment="start"
          decelerationRate="fast">
          {forecastsComponents}
        </ScrollView>
      )
    );
  }
};

const mapStateToProps = ({ geolocation, weatherReport }) => ({
  geolocation,
  weatherReport,
});

const styles = {
  container: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 15,
  },
}

export default connect(mapStateToProps, actions)(WeatherReport);
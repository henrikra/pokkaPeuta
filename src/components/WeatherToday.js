import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import OneDayWeather from './OneDayWeather';

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const forecasts = _.map(this.props.forecast, (oneDayWeather, index) =>
      <OneDayWeather key={index} oneDayWeather={oneDayWeather} />
    );

    return (
      <ScrollView>
        {forecasts}
      </ScrollView>
    );
  }
};

const mapStateToProps = ({ geolocation, forecast }) => ({
  geolocation,
  forecast,
});

export default connect(mapStateToProps, actions)(WeatherToday);
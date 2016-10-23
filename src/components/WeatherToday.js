import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import Forecast from './Forecast';

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const forecasts = _.map(this.props.forecast, (forecast, index) =>
      <Forecast key={index} forecast={forecast} />
    );

    return (
      <View>
        {forecasts}
      </View>
    );
  }
};

const mapStateToProps = ({ geolocation, forecast }) => ({
  geolocation,
  forecast,
});

export default connect(mapStateToProps, actions)(WeatherToday);
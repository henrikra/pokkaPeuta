import React, { Component } from 'react';
import { ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import OneDayWeather from './OneDayWeather';
import Loader from './Loader';

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const forecasts = _.map(this.props.forecast, (oneDayWeather, index) =>
      <OneDayWeather key={index} oneDayWeather={oneDayWeather} />
    );

    return (
      this.props.geolocation.isLoading ? <Loader /> : (
        <ScrollView 
          horizontal={true}
          snapToInterval={Dimensions.get('window').width}
          snapToAlignment="start"
          decelerationRate={0}>
          {forecasts}
        </ScrollView>
      )
    );
  }
};

const mapStateToProps = ({ geolocation, forecast }) => ({
  geolocation,
  forecast,
});

export default connect(mapStateToProps, actions)(WeatherToday);
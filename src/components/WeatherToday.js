import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class WeatherToday extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.props.fetchLocation(position.coords),
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  render() {
    return (
      <Text>I am weather today</Text>
    );
  }
};

const mapStateToProps = ({ geolocation }) => ({
  geolocation
});

export default connect(mapStateToProps, actions)(WeatherToday);
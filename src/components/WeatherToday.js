import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class WeatherToday extends Component {
  render() {
    return (
      <Text>I am weather today</Text>
    );
  }
};

const mapStateToProps = ({ geolocation }) => ({
  geolocation
});

export default connect(mapStateToProps)(WeatherToday);
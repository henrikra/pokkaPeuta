import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class WeatherToday extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('currentlocation', position.coords);
      },
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

export default connect(mapStateToProps)(WeatherToday);
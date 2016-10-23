import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const WeatherToday = (props) => {
  return (
    <Text>I am weather today</Text>
  );
};

const mapStateToProps = ({ geolocation }) => ({
  geolocation
});

export default connect(mapStateToProps)(WeatherToday);
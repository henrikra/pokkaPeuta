import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    return (
      <View>
        <Text>My current location</Text>
        <Text>Longitude: {this.props.geolocation.longitude}</Text>
        <Text>Latitude: {this.props.geolocation.latitude}</Text>
      </View>
    );
  }
};

const mapStateToProps = ({ geolocation }) => ({
  geolocation
});

export default connect(mapStateToProps, actions)(WeatherToday);
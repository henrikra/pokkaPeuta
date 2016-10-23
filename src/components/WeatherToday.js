import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class WeatherToday extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    console.log('propsit', this.props.geolocation);
    return (
      <Text>I am weather today</Text>
    );
  }
};

const mapStateToProps = ({ geolocation }) => ({
  geolocation
});

export default connect(mapStateToProps, actions)(WeatherToday);
import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import moment from 'moment';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import { getIcon } from '../utils/weather';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -20,
    width: 90,
  },
  pointerContainer: {
    minHeight: 25,
  },
  pointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
    marginTop: 20,
    marginBottom: -5,
  },
  date: {
    color: '#ffffff',
    marginTop: -15,
  },
});

const getMostMiddle = arr => arr[_.floor(arr.length / 2)];

const WeatherReportItem = ({ forecast, selectDate, isActive }) => {
  const icon = getIcon(getMostMiddle(forecast.forecast));

  return (
    <TouchableOpacity onPress={() => selectDate(forecast)} style={styles.container}>
      <View style={styles.pointerContainer}>
        {isActive && <View style={styles.pointer} />}
      </View>
      <SvgUri width="75" height="75" source={icon} />
      <Text style={styles.date}>
        {moment(forecast.date).format('dddd').substr(0, 3).toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

WeatherReportItem.propTypes = {
  forecast: PropTypes.shape({}),
  selectDate: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default connect(null, actions)(WeatherReportItem);

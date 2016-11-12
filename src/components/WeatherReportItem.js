import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
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
  date: {
    color: '#ffffff',
    marginTop: -15,
  },
});

const getMostMiddle = arr => arr[_.floor(arr.length / 2)];

const WeatherReportItem = ({ forecast, selectDate }) => {
  const icon = getIcon(getMostMiddle(forecast.forecast));

  return (
    <TouchableOpacity onPress={() => selectDate(forecast)} style={styles.container}>
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
};

export default connect(null, actions)(WeatherReportItem);

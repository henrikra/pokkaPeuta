import React, { PropTypes } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import moment from 'moment';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import { getIcon } from '../utils/weather';

const styles = StyleSheet.create({
  listItem: {
    alignItems: 'center',
    marginTop: -20,
    width: 90,
  },
  listItemText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: -15,
  },
});

const getMostMiddle = arr => arr[_.floor(arr.length / 2)];

const WeatherReportItem = ({ forecast, selectDate }) => {
  const icon = getIcon(_.first(getMostMiddle(forecast.forecast).weather));

  return (
    <TouchableOpacity onPress={() => selectDate(forecast)}>
      <View style={styles.listItem}>
        <SvgUri width="75" height="75" source={icon} />
        <Text style={styles.listItemText}>{moment(forecast.date).format('D.M')}</Text>
      </View>
    </TouchableOpacity>
  );
};

WeatherReportItem.propTypes = {
  forecast: PropTypes.shape({}),
  selectDate: PropTypes.func.isRequired,
};

export default connect(null, actions)(WeatherReportItem);

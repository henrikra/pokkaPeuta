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

const WeatherReportItem = ({ forecast, selectDate }) => {
  return (
    <TouchableOpacity onPress={() => selectDate(forecast)}>
      <View style={styles.listItem}>
        <SvgUri width="75" height="75" source={getIcon(_.first(_.first(forecast.forecast).weather))} />
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

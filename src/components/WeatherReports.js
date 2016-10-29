import React, { PropTypes } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../actions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
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

const WeatherReports = ({ weatherReport, selectDate }) => {
  if (!weatherReport.forecastGroupedByDate.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal
      >
        {weatherReport.forecastGroupedByDate.map((forecast) => {
          return (
            <TouchableOpacity key={forecast.date} onPress={() => selectDate(forecast)}>
              <View style={styles.listItem}>
                <SvgUri width="75" height="75" source={require('../images/Cloud.svg')} />
                <Text style={styles.listItemText}>{moment(forecast.date).format('D.M')}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

WeatherReports.propTypes = {
  weatherReport: PropTypes.shape({}),
  selectDate: PropTypes.func,
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps, actions)(WeatherReports);

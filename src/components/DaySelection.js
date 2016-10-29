import React, { PropTypes } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../actions';

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
};

const CurrentWeather = ({ weatherReport, selectDate }) => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
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

CurrentWeather.propTypes = {
  weatherReport: PropTypes.shape({}),
  selectDate: PropTypes.func,
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps, actions)(CurrentWeather);

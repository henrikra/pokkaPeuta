import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import * as actions from '../actions';
import Loader from './Loader';
import { getIcon } from '../utils/weather';

const getTemperature = (temperature) => {
  const roundedTemperature = Math.floor(temperature);

  if (roundedTemperature > 0) {
    return `+ ${roundedTemperature}`;
  } else if (roundedTemperature < 0) {
    return `- ${roundedTemperature}`;
  }

  return roundedTemperature;
};

const formatTime = (time) => {
  return time.split(':')
    .map((partOfTime, index) => {
      if (_.startsWith(partOfTime, '0') && index === 0) {
        return partOfTime[1];
      }

      return partOfTime;
    })
    .slice(0, -1)
    .join(':');
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -20,
  },
  bigTemperature: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  temperature: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: -25,
  },
  icon: {
    marginLeft: -40,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRowText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: 40,
  },
  timesContainer: {
    maxWidth: 200,
  },
  fucker: {
    flex: 1,
    marginBottom: 10,
  },
});

class SelectedWeatherReport extends Component {
  componentDidMount() {
    this.props.fetchLocation();
  }

  render() {
    const {
      weatherReport: { selectedForecast },
      geolocation: { isLoading },
    } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (!selectedForecast) {
      return null;
    }
    const bigForecast = _.first(selectedForecast.forecast);
    const isToday = moment(bigForecast.dt_txt).isSame(moment(), 'day');
    const restOfForecast = isToday ? _.tail(selectedForecast.forecast) : selectedForecast.forecast;

    return (
      <View style={styles.container}>
        <Text style={styles.bigTemperature}>
          {moment(bigForecast.dt_txt.split(' ').shift()).format('D.M.YYYY')}
        </Text>
        {isToday && (
          <View style={styles.infoContainer}>
            <SvgUri
              style={styles.icon}
              width="175"
              height="175"
              source={getIcon(bigForecast)}
            />
            <Text style={styles.temperature}>{getTemperature(bigForecast.main.temp)}&deg;</Text>
          </View>
        )}

        <View style={[styles.fucker, { marginTop: isToday ? -10 : 20 }]}>
          <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'center' }}>
            {restOfForecast.map((forecast, index) => {
              return (
                <View key={forecast.dt} style={[styles.infoRow, { marginTop: !index ? -15 : -30 }]}>
                  <Text style={styles.infoRowText}>
                    {formatTime(forecast.dt_txt.split(' ').pop())}
                  </Text>
                  <SvgUri
                    style={styles.infoRowIcon}
                    width="75"
                    height="75"
                    source={getIcon(forecast)}
                  />
                  <Text style={styles.infoRowText}>{getTemperature(forecast.main.temp)}&deg;</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

SelectedWeatherReport.propTypes = {
  weatherReport: PropTypes.shape({}),
  geolocation: PropTypes.shape({}),
  fetchLocation: PropTypes.func,
};

const mapStateToProps = ({ weatherReport, geolocation }) => ({
  weatherReport, geolocation,
});

export default connect(mapStateToProps, actions)(SelectedWeatherReport);

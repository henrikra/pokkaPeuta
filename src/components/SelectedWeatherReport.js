import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';
import Loader from './Loader';
import { getTemperature, isToday } from '../utils/weather';
import SelectedWeatherList from './SelectedWeatherList';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  infoContainer: {
    alignItems: 'center',
  },
  date: {
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
  temperature: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 100,
    fontWeight: '300',
  },
  description: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '200',
  },
});

const getDescription = (forecast) => {
  const description = _.get(forecast, 'weather[0].main');

  if (description === 'Rain') {
    return _.get(forecast, 'rain.3h') > 0.1 ? 'Rain' : 'Clouds';
  } else if (description === 'Snow') {
    return _.get(forecast, 'snow.3h') > 0.1 ? 'Snow' : 'Clouds';
  }

  return description;
};

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

    return (
      <View style={styles.container}>
        {isToday(selectedForecast) && (
          <View style={styles.infoContainer}>
            <Text style={styles.description}>{getDescription(bigForecast)}</Text>
            <Text style={styles.temperature}>{getTemperature(bigForecast.main.temp)}&deg;</Text>
          </View>
        )}
        <SelectedWeatherList selectedForecast={selectedForecast} />
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

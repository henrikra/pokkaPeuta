import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import * as actions from '../actions';
import Loader from './Loader';
import { getIcon, getTemperature, isToday } from '../utils/weather';
import SelectedWeatherList from './SelectedWeatherList';

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
  date: {
    backgroundColor: 'transparent',
    color: '#ffffff',
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

    return (
      <View style={styles.container}>
        <Text style={styles.date}>
          {moment(bigForecast.dt_txt.split(' ').shift()).format('D.M.YYYY')}
        </Text>
        {isToday(selectedForecast) && (
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

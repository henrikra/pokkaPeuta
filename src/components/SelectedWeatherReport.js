import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView } from 'react-native';
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

const isToday = (selectedForecast) => {
  const bigForecast = _.first(selectedForecast.forecast);
  return moment(bigForecast.dt_txt).isSame(moment(), 'day');
};

class SelectedWeatherReport extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.dt !== r2.dt });
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this.props.fetchLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weatherReport.selectedForecast) {
      const { weatherReport: { selectedForecast } } = nextProps;
      const newRows = isToday(selectedForecast)
        ? _.tail(selectedForecast.forecast)
        : selectedForecast.forecast;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newRows),
      });
    }
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
    const isTodayReally = isToday(selectedForecast);

    return (
      <View style={styles.container}>
        <Text style={styles.bigTemperature}>
          {moment(bigForecast.dt_txt.split(' ').shift()).format('D.M.YYYY')}
        </Text>
        {isTodayReally && (
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

        <View style={[styles.fucker, { marginTop: isTodayReally ? -10 : 20 }]}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(forecast, sectionId, rowId) => {
              return (
                <View style={[styles.infoRow, { marginTop: rowId === '0' ? -15 : -30 }]}>
                  <Text style={styles.infoRowText}>
                    {formatTime(forecast.dt_txt.split(' ').pop())}
                  </Text>
                  <SvgUri
                    key={getIcon(forecast)}
                    style={styles.infoRowIcon}
                    width="75"
                    height="75"
                    source={getIcon(forecast)}
                  />
                  <Text style={styles.infoRowText}>{getTemperature(forecast.main.temp)}&deg;</Text>
                </View>
              );
            }}
            contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'center' }}
          />
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

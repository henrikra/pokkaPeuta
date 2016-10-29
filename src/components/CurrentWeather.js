import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import * as actions from '../actions';
import Loader from './Loader';

const getTemperature = (temperature) => {
  const roundedTemperature = Math.floor(temperature);

  if (roundedTemperature > 0) {
    return `+ ${roundedTemperature}`;
  }
  else if (roundedTemperature < 0 ) {
    return `- ${roundedTemperature}`;
  }
  else {
    return roundedTemperature;
  }
};

const ICONS = {
  nightClearSky: '01n',
  nightFewClouds: '02n',
  nightScatteredClouds: '03n',
  nightBrokenClouds: '04n',
  nightShowerRain: '09n',
  nightRain: '10n',
  nightThunderStorm: '11n',
  nightMist: '50n',
  dayClearSky: '01d',
  dayFewClouds: '02d',
  dayScatteredClouds: '03d',
  dayBrokenClouds: '04d',
  dayShowerRain: '09d',
  dayRain: '10d',
  dayThunderStorm: '11d',
  dayMist: '50d',
};

const getIcon = (weather) => {
  switch (weather.icon) {
    case ICONS.dayRain:
      return require("../images/Cloud-Rain.svg");
    case ICONS.nightRain:
      return require("../images/Cloud-Rain-Moon.svg");
    case ICONS.dayRain:
      return require("../images/Cloud-Rain.svg");
    case ICONS.nightFewClouds:
      return require("../images/Cloud-Moon.svg");
    case ICONS.dayFewClouds:
      return require("../images/Cloud-Sun.svg");
    case ICONS.nightBrokenClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayBrokenClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayScatteredClouds:
      return require("../images/Cloud.svg");
    case ICONS.nightScatteredClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayClearSky:
      return require("../images/Sun.svg");
    case ICONS.nightClearSky:
      return require("../images/Moon.svg");
  }
}

const formatTime = (time) => {
  return time.split(':')
    .map((partOfTime) => {
      if (_.startsWith(partOfTime, '0') && _.toNumber(partOfTime[1]) > 0) {
        return partOfTime[1];
      }

      return partOfTime
    })
    .slice(0, -1)
    .join(':');
};

const styles = {
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
  }
};

class CurrentWeather extends Component {
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
    const restOfForecast = _.tail(selectedForecast.forecast);

    const isToday = moment(bigForecast.dt_txt).isSame(moment(), 'day');

    return (
      <View style={styles.container}>
        <Text style={styles.bigTemperature}>
          {moment(bigForecast.dt_txt.split(' ').shift()).format('D.M.YYYY')}
        </Text>
        {isToday && (
          <View style={styles.infoContainer}>
            <SvgUri style={styles.icon} width="175" height="175" source={getIcon(_.first(bigForecast.weather))} />
            <Text style={styles.temperature}>{getTemperature(bigForecast.main.temp)}&deg;</Text>
          </View>
        )}

        <View style={{ ...styles.fucker, marginTop: isToday ? -10 : 20 }}>
          <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width, alignItems: 'center' }}>
            {restOfForecast.map((forecast, index) => {
              return (
                <View key={forecast.dt} style={{ ...styles.infoRow, marginTop: !index ? -15 : -30 }}>
                  <Text style={styles.infoRowText}>
                    {formatTime(forecast.dt_txt.split(' ').pop())}
                  </Text>
                  <SvgUri style={styles.infoRowIcon} width="75" height="75" source={getIcon(_.first(forecast.weather))} />
                  <Text style={styles.infoRowText}>{getTemperature(forecast.main.temp)}&deg;</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}


const mapStateToProps = ({ weatherReport, geolocation }) => ({
  weatherReport, geolocation,
});

export default connect(mapStateToProps, actions)(CurrentWeather);

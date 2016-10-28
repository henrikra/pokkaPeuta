import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import _ from 'lodash';

const CurrentWeather = ({ weatherReport: { selectedForecast } }) => {
  if (!selectedForecast) {
    return null;
  }
  const bigForecast = _.first(selectedForecast.forecast);
  const restOfForecast = _.tail(selectedForecast.forecast);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <SvgUri style={styles.icon} width="175" height="175" source={require('../images/Cloud-Rain.svg')} />
        <Text style={styles.temperature}>{_.floor(bigForecast.main.temp)}&deg;C</Text>
      </View>
      <View style={styles.timesContainer}>
        {restOfForecast.map((forecast) => {
          console.log('yksi', forecast);
          return (
            <View key={forecast.dt} style={styles.infoRow}>
              <Text style={styles.infoRowText}>
                {forecast.dt_txt.split(' ').pop()}
              </Text>
              <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
              <Text style={styles.infoRowText}>{_.floor(forecast.main.temp)}&deg;C</Text>
            </View>
          );
        })}
      </View>
    </View>
  )
}

const styles = {
  container: {
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: -30,
  },
  infoRowText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: 40,
  },
  timesContainer: {
    maxWidth: 200,
  }
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(CurrentWeather);
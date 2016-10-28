import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import moment from 'moment';

const CurrentWeather = ({ weatherReport }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}>
      {weatherReport.forecastGroupedByDate.map((forecast) => {
        return (
          <View key={forecast.date} style={styles.listItem}>
            <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
            <Text style={styles.listItemText}>{moment(forecast.date).format('D.M')}</Text>
          </View>
        );
      })}
    </ScrollView>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 25,
  },
  listItem: {
    alignItems: 'center',
    marginTop: -20,
    width: 105,
  },
  listItemText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: -15,
  },
  listItemIcon: {
    // marginTop: -10,
  }
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(CurrentWeather);
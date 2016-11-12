import React, { PropTypes } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import WeatherReportItem from './WeatherReportItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
});

const WeatherReports = ({ weatherReport }) => {
  if (!weatherReport.forecasts.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal
      >
        {weatherReport.forecasts.map(forecast =>
          <WeatherReportItem
            key={forecast.date}
            forecast={forecast}
            isActive={weatherReport.selectedForecast.date === forecast.date}
          />
        )}
      </ScrollView>
    </View>
  );
};

WeatherReports.propTypes = {
  weatherReport: PropTypes.shape({}),
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(WeatherReports);

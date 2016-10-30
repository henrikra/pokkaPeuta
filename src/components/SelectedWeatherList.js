import React, { Component, PropTypes } from 'react';
import { View, Text, Dimensions, StyleSheet, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import SvgUri from 'react-native-svg-uri';

import { getIcon, isToday, getTemperature } from '../utils/weather';

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
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRowText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: 40,
  },
  container: {
    flex: 1,
    marginBottom: 10,
  },
});

const getRows = (selectedForecast) => {
  return isToday(selectedForecast)
    ? _.tail(selectedForecast.forecast)
    : selectedForecast.forecast;
};

class SelectedWeatherList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.dt !== r2.dt });
    this.state = {
      dataSource: ds.cloneWithRows(getRows(props.selectedForecast)),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weatherReport.selectedForecast) {
      const { weatherReport: { selectedForecast } } = nextProps;
      const newRows = getRows(selectedForecast);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newRows),
      });
    }
  }

  render() {
    const { selectedForecast } = this.props;

    return (
      <View style={[styles.container, { marginTop: isToday(selectedForecast) ? -10 : 20 }]}>
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
    );
  }
}

SelectedWeatherList.propTypes = {
  geolocation: PropTypes.shape({}),
  selectedForecast: PropTypes.shape({}),
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(SelectedWeatherList);

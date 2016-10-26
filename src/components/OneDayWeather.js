import React from 'react';
import { ScrollView, Text, Dimensions } from 'react-native';
import moment from 'moment';

import PartOfDay from './PartOfDay';

const getTitle = (partOfDay) => {
  const time = partOfDay.dt_txt.split(' ').pop()

  switch (time) {
    case '00:00:00':
      return "Night";
    case '06:00:00':
      return "Morning";
    case '12:00:00':
      return "Day";
    case '18:00:00':
      return "Evening";
  }
}

const OneDayWeather = ({ oneDayWeather }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.date}>{moment(oneDayWeather.date).format('D.M.YYYY')}</Text>
      {oneDayWeather.forecast.map((partOfDay, index) => (
        <PartOfDay key={partOfDay.dt} title={getTitle(partOfDay)} partOfDay={partOfDay} />
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    width: Dimensions.get('window').width,
  },
  date: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#8ba892',
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default OneDayWeather;
import React from 'react';
import { ScrollView, Text, Dimensions, View, TouchableOpacity } from 'react-native';
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
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{moment(oneDayWeather.date).format('D.M.YYYY')}</Text>
      </View>
      <ScrollView style={styles.container}>
        {oneDayWeather.forecast.map((partOfDay, index) => (
          <PartOfDay key={partOfDay.dt} title={getTitle(partOfDay)} partOfDay={partOfDay} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    width: Dimensions.get('window').width - 60,
    marginRight: 15,
  },
  dateContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },  
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default OneDayWeather;
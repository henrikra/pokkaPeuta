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



const OneDayWeather = ({ oneDayWeather, scroll, index, isLast }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dateContainer}>
        {index > 0 && <TouchableOpacity style={styles.button} onPress={() => scroll(screenWidth * index - screenWidth)}><Text>Back</Text></TouchableOpacity>}
        <Text style={styles.date}>{moment(oneDayWeather.date).format('D.M.YYYY')}</Text>
        {!isLast && <TouchableOpacity style={styles.button} onPress={() => scroll(screenWidth * index + screenWidth)}><Text>Next</Text></TouchableOpacity>}
      </View>
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
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8ba892',
    paddingHorizontal: 7,
    paddingTop: 25,
    paddingBottom: 7,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 3,
  },
  date: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default OneDayWeather;
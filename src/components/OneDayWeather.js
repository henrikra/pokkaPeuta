import React from 'react';
import { View, Text } from 'react-native';

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
      {oneDayWeather.forecast.map((partOfDay, index) => (
        <PartOfDay key={partOfDay.dt} title={getTitle(partOfDay)} partOfDay={partOfDay} />
      ))}
    </View>
  );
};

export default OneDayWeather;
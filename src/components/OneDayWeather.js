import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import moment from 'moment';

import PartOfDay from './PartOfDay';

const isAfterToday = (forecast) => {
  const lastSecondOfToday = moment().set({ hour: 23, minute: 59, second: 59 });

  return moment(forecast.date).isAfter(lastSecondOfToday);
}

const getTitle = (lollero) => {
  const time = lollero.dt_txt.split(' ').pop()

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
  if (isAfterToday(oneDayWeather)) {
    return null;
  }

  return (
    <View style={{ borderWidth: 3, borderColor: 'red' }}>
      {oneDayWeather.forecast.map((lollero, index) => (
        <PartOfDay key={lollero.dt} title={getTitle(lollero)} partOfDay={lollero} />
      ))}
    </View>
  );
};

export default OneDayWeather;
import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import moment from 'moment';

import PartOfDay from './PartOfDay';

const isAfterToday = (forecast) => {
  const forecastDate = _.first(forecast).dt * 1000; 
  const lastSecondOfToday = moment().set({ hour: 23, minute: 59, second: 59 });

  return moment(forecastDate).isAfter(lastSecondOfToday);
}

const Forecast = ({ forecast }) => {
  if (isAfterToday(forecast)) {
    return null;
  }

  const morning = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '06:00:00');
  const day = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '12:00:00');
  const evening = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '18:00:00');
  const night = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '00:00:00');

  return (
    <View>
      {morning && <PartOfDay title="Morning" partOfDay={morning} />}
      {day && <PartOfDay title="Day" partOfDay={day} />}
      {evening && <PartOfDay title="Evening" partOfDay={evening} />}
      {night && <PartOfDay title="Night" partOfDay={night} />}
    </View>
  );
};

export default Forecast;
import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

import PartOfDay from './PartOfDay';

const Forecast = ({ forecast }) => {
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
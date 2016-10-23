import React from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

const Forecast = ({ forecast }) => {
  const morning = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '06:00:00');
  const day = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '12:00:00');
  const evening = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '18:00:00');
  const night = forecast.find((every3Hour) => every3Hour.dt_txt.split(' ').pop() === '00:00:00');

  return (
    <View>
      {morning && (
        <View>
          <Text>Morning</Text>
          <Text>{morning.main.temp}</Text>
        </View>
      )}
    </View>
  );
};

export default Forecast;
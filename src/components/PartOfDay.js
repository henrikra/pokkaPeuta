import React from 'react';
import { View, Text } from 'react-native';

const getBackgroundColor = (title) => {
  switch (title) {
    case 'Morning':
      return '#e3bb88';
    case 'Day':
      return '#db9864';
    case 'Evening':
      return '#b1695a';
    case 'Night':
      return '#644749';
    default:
      return '#ffffff';
  }
}

const PartOfDay = ({ title, partOfDay }) => {
  return (
    <View style={{ backgroundColor: getBackgroundColor(title) }}>
      <Text>{title}</Text>
      <Text>{partOfDay.main.temp}</Text>
    </View>
  );
};

export default PartOfDay;
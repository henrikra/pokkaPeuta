import React from 'react';
import { View, Text } from 'react-native';

const PartOfDay = ({ title, partOfDay }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{partOfDay.main.temp}</Text>
    </View>
  );
};

export default PartOfDay;
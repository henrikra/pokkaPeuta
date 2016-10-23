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
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <Text style={styles.temperatures}>{Math.round(partOfDay.main.temp)}</Text>
    </View>
  );
};

const styles = {
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperatures: {
    color: '#ffffff',
    fontSize: 24,
  }
};

export default PartOfDay;
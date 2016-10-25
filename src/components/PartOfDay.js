import React from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'react-native-svg-uri';

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

const getTemperature = (temperature) => {
  const roundedTemperature = Math.round(temperature);
  
  if (roundedTemperature > 0) {
    return `+ ${roundedTemperature}`;
  }
  else if (roundedTemperature < 0 ) {
    return `- ${roundedTemperature}`;
  }
  else {
    return roundedTemperature;
  }
};

const PartOfDay = ({ title, partOfDay }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: getBackgroundColor(title) }}>
      <View style={styles.imageContainer}>
        <SvgUri width="175" height="175" source={require('../images/Sun.svg')} /> 
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Text style={styles.temperatures}>{getTemperature(partOfDay.main.temp)}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 3,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 2
  },
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  temperatures: {
    color: '#ffffff',
    fontSize: 32,
  }
};

export default PartOfDay;
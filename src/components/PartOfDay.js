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

const ICONS = {
  nightClearSky: '01n',
  nightFewClouds: '02n',
  nightScatteredClouds: '03n',
  nightBrokenClouds: '04n',
  nightShowerRain: '09n',
  nightRain: '10n',
  nightThunderStorm: '11n',
  nightMist: '50n',
  dayClearSky: '01d',
  dayFewClouds: '02d',
  dayScatteredClouds: '03d',
  dayBrokenClouds: '04d',
  dayShowerRain: '09d',
  dayRain: '10d',
  dayThunderStorm: '11d',
  dayMist: '50d',
};

const getIcon = (weather) => {
  switch (weather.icon) {
    case ICONS.dayRain:
      return require("../images/Cloud-Rain.svg");
    case ICONS.nightRain:
      return require("../images/Cloud-Rain-Moon.svg");
    case ICONS.dayRain:
      return require("../images/Cloud-Rain.svg");
    case ICONS.nightFewClouds:
      return require("../images/Cloud-Moon.svg");
    case ICONS.nightClearSky:
      return require("../images/Moon.svg");
    case ICONS.nightBrokenClouds:
      return require("../images/Cloud.svg");
    default:
      return require('../images/Sun.svg');
  }
}

const PartOfDay = ({ title, partOfDay }) => {
  const [ weather ] = partOfDay.weather;

  return (
    <View style={{ ...styles.container, backgroundColor: getBackgroundColor(title) }}>
      <View style={styles.imageContainer}>
        <SvgUri width="175" height="175" source={getIcon(weather)} /> 
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <Text style={styles.temperatures}>{getTemperature(partOfDay.main.temp)}</Text>
        <Text style={styles.description}>{weather.main}</Text>
        <Text style={styles.wind}>Wind: {Math.round(partOfDay.wind.speed)} m/s</Text>
        <Text style={styles.humidity}>Humidity: {partOfDay.main.humidity} %</Text>
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
  },
  description: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: 15,
  },
  wind: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 2,
  },
  humidity: {
    color: '#ffffff',
    fontSize: 18,
  },
};

export default PartOfDay;
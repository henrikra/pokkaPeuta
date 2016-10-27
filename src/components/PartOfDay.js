import React, { Component } from 'react';
import { View, Text, TouchableHighlight, LayoutAnimation, Animated } from 'react-native';
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
  const roundedTemperature = Math.floor(temperature);
  
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
    case ICONS.dayFewClouds:
      return require("../images/Cloud-Sun.svg");
    case ICONS.nightBrokenClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayBrokenClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayScatteredClouds:
      return require("../images/Cloud.svg");
    case ICONS.nightScatteredClouds:
      return require("../images/Cloud.svg");
    case ICONS.dayClearSky:
      return require("../images/Sun.svg");
    case ICONS.nightClearSky:
      return require("../images/Moon.svg");
  }
}

class PartOfDay extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false,
      scale: new Animated.Value(0.8),
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  toggleOpen() {
    Animated.timing(
      this.state.scale,
      {
        toValue: this.state.isOpen ? 0.8 : 1.2, 
        duration: 100 
      }
    ).start();

    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { title, partOfDay } = this.props;
    const { isOpen } = this.state;
    const [ weather ] = partOfDay.weather;

    return (
      <TouchableHighlight onPress={this.toggleOpen}>
        <View style={{ ...styles.container, backgroundColor: getBackgroundColor(title), height: isOpen ? 200 : 100 }}>
          <View style={styles.imageContainer}>
            <Animated.View style={{ transform: [{ scale: this.state.scale }] }}>
              <SvgUri width="125" height="125" source={getIcon(weather)} />
            </Animated.View> 
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            <Text style={styles.temperatures}>{getTemperature(partOfDay.main.temp)}&deg;</Text>
            <Text style={styles.description}>{weather.main}</Text>
            <Text style={styles.wind}>Wind: {Math.round(partOfDay.wind.speed)} m/s</Text>
            <Text style={styles.humidity}>Humidity: {partOfDay.main.humidity} %</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
};

const styles = {
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    paddingVertical: 24,
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
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
  humidity: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
};

export default PartOfDay;
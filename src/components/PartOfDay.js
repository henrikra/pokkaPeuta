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

class PartOfDay extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false,
      fadeAnim: new Animated.Value(0), 
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  toggleOpen() {
    Animated.timing(          
       this.state.fadeAnim,    
       {toValue: this.state.isOpen ? 0 : 1}            
     ).start();  

    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { title, partOfDay } = this.props;
    const { isOpen } = this.state;
    const [ weather ] = partOfDay.weather;

    console.log(this.props);

    return (
      <TouchableHighlight onPress={this.toggleOpen}>
        <View style={{ ...styles.container, backgroundColor: getBackgroundColor(title), height: isOpen ? 200 : 80 }}>
          <View style={styles.imageContainer}>
            <SvgUri width="175" height={isOpen ? 175 : 75} source={getIcon(weather)} /> 
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            <Text style={styles.temperatures}>{getTemperature(partOfDay.main.temp)}</Text>
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
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 2,
    paddingVertical: 15,
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
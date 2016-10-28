import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const CurrentWeather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <SvgUri style={styles.icon} width="175" height="175" source={require('../images/Cloud-Rain.svg')} />
        <Text style={styles.temperature}>28&deg;C</Text>
      </View>
      <View style={styles.timesContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>3:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>6:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>9:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>12:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>15:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>18:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoRowText}>21:00</Text>
          <SvgUri style={styles.infoRowIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
          <Text style={styles.infoRowText}>23&deg;C</Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: -25,
  },
  icon: {
    marginLeft: -40,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -30,
  },
  infoRowText: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    width: 40,
  },
  timesContainer: {
    maxWidth: 200,
  }
};

export default CurrentWeather;